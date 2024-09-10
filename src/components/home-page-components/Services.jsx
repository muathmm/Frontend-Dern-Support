import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Seperator from "./Seperator";
import img1 from "../../assets/feturedservices/istockphoto-625135580-1024x1024.jpg";
import img2 from "../../assets/feturedservices/wallpaperflare.com_wallpaper (4).jpg";
import img3 from "../../assets/feturedservices/wallpaperflare.com_wallpaper (5).jpg";

export default function Services() {
  const [services, setServices] = useState([]);

  // Dummy data to simulate the services using imported images
  useEffect(() => {
    const dummyServices = [
      {
        _id: "1",
        name: "Computer Repair",
        img: img1,
      },
      {
        _id: "2",
        name: "Virus Removal",
        img: img2,
      },
      {
        _id: "3",
        name: "Data Recovery",
        img: img3,
      },
    ];
    setServices(dummyServices);
  }, []);

  return (
    <div id="services" className="container mx-auto px-4 my-28">
      <div className="text-center mb-12">
        <Seperator
          heading="Featured Services"
          text="Explore the range of services we offer to keep your computers running smoothly."
        />
      </div>

      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
        {services.map((service) => (
          <div
            key={service._id}
            className="service-card max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-100 w-full"
          >
            <img
              className="w-full h-64 object-cover transform transition-all duration-300 hover:opacity-80 hover:cursor-pointer"
              src={service.img}
              alt={service.name}
            />
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2">{service.name}</div>
              <p className="text-gray-700 text-base">
                High-quality {service.name.toLowerCase()} services to meet your
                needs. We ensure your technology is in safe hands.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* "View More" button under all services */}
      <div className="text-center mt-12">
        <Link
          to="/services"
          className="inline-block bg-sky-500 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300 hover:bg-sky-700"
        >
          View More
        </Link>
      </div>
    </div>
  );
}
