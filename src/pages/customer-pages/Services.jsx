import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSeriveces } from "../../hooks/useAdminServiceHook";
import Loading from "../../components/Loading";
import SearchInput from "../../components/SearchInput";
import Swal from "sweetalert2";


export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, error } = useSeriveces();
  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    Swal.fire("Error!", "There was an issue when rendering the page.", "error");
    return null;
  }

  const filteredServices = data?.filter((service) =>
    service?.title?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 my-10 mt-40">
      <div className="mb-16">
        <SearchInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          placeholder="Search services..."
        />
      </div>

      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
        {filteredServices?.map((e) => {
          return (
            <div
              key={e?.id}
              className="flex items-center justify-center transform transition-transform hover:scale-105 duration-300"
            >
              <div className="mx-auto bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="grid rounded-3xl max-w-[370px] shadow-sm bg-slate-100 flex-col">
                  <img
                    src={`${import.meta.env.VITE_SERVER_URL}/image/${e?.image}`}
                    width="375"
                    height="200"
                    className="rounded-t-3xl h-80 object-cover"
                    alt={e?.title}
                    loading="lazy"
                  />
                  <div className="p-6">
                    <Link
                      to={`/services/${e?.id}`}
                      state={{ readMore: e, to: "/services" }}
                      className="font-bold text-2xl line-clamp-2 group-hover:text-cyan-700 transition-colors duration-300"
                    >
                      {e?.title}
                    </Link>
                    <span className="text-slate-400 pt-2 font-semibold block">
                      {e?.actualcost}$
                    </span>
                    <div className="h-28">
                      <span className="line-clamp-4 py-2 text-sm font-light leading-relaxed text-slate-600">
                        {e?.issuedescription}
                      </span>
                    </div>
                    <Link
                      to={`/services/${e?.id}`}
                      state={{ readMore: e }}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300 mt-4 block text-center"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
