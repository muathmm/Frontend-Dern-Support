import React, { useState, useEffect } from "react";
import Modal from "../../components/modals/ServiceModal";
import SuccessModal from "../../components/modals/SuccessModal";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useDeleteService, useSeriveces, useUpdateService } from "../../hooks/useAdminServiceHook";
import Loading from "../../components/Loading";
import NotFound from "../NotFound";
import { Link } from "react-router-dom";

function ViewAllServices() {
  const updateMutation = useUpdateService();
  const deleteMutation = useDeleteService();
  const { data, isLoading, isError, refetch } = useSeriveces();
  const [services, setServices] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [editService, setEditService] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(false);

  useEffect(() => {
    if (data) {
      setServices(data);
      console.log(data);
    }
  }, [data]);

  if (isLoading) {
    return <Loading />; 
  }

  if (isError) {
    return <NotFound />;
  }

  const filteredServices = filterCategory
    ? data.filter((service) => service.category === filterCategory)
    : data;
    
  const handleDelete = (id) => {
    deleteMutation.mutate(id, {
      onSuccess: () => {
        setDeleteMessage(true);
        refetch(); // Refetch services data after successful deletion
      }
    });
  };

  const handleEdit = (service) => {
    setEditService(service);
  };

  const handleUpdateService = (updatedService) => {
    updateMutation.mutate(updatedService, {
      onSuccess: () => {
        setSuccessMessage(true);
        refetch(); // Refetch services data after successful update
        setEditService(null);
        setTimeout(() => setSuccessMessage(false), 5000);
      }
    });
  };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex">
        <div className="container mx-auto mt-8 p-4">
          <h1 className="text-3xl font-bold mb-4 text-center">View All Services</h1>

          {/* Filter by Category */}
          <div className="mb-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-4">
            <label className="font-semibold text-lg">Filter by Category:</label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              <option value="software">Software</option>
              <option value="hardware">Hardware</option>
            </select>
          </div>

          {/* Table of Services */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-500 text-white text-left">
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Actual Cost</th>
                  <th className="px-4 py-3">Time (Minutes)</th>
                  <th className="px-4 py-3">Description</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredServices.map((service) => (
                  <tr key={service.id} className="border-t border-gray-300">
                    <td className="px-4 py-3">{service.id}</td>
                    <td className="px-4 py-3 text-blue-600 underline font-bold">
                      <Link to={`/servicesInAdmin/${service.id}`} state={{ readMore: service, to: "/admin/ViewAllServices" }}>{service.title}</Link>
                    </td>
                    <td className="px-4 py-3">{service.category}</td>
                    <td className="px-4 py-3">{service.actualcost}</td>
                    <td className="px-4 py-3">{service.maintenancetime} -days</td>
                    <td className="px-4 py-3">{service.issuedescription}</td>
                    <td className="px-4 py-3">
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
                        onClick={() => handleEdit(service)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                        onClick={() => handleDelete(service.id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Edit Service Modal */}
      {editService && (
        <Modal
          service={editService}
          onClose={() => setEditService(null)}
          onSave={handleUpdateService}
        />
      )}

      {/* Success Message Modal */}
      {successMessage && (
        <SuccessModal
          message="Service updated successfully!"
          onClose={() => setSuccessMessage(false)}
        />
      )}

      {/* Delete Message Modal */}
      {deleteMessage && (
        <SuccessModal
          message="Service deleted successfully!"
          onClose={() => setDeleteMessage(false)}
        />
      )}
    </>
  );
}

export default ViewAllServices;
