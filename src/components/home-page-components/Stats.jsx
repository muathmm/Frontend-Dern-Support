import React from "react";
import CountUp from "react-countup";
import Seperator from "./Seperator";

function Stats() {
  const stats = [
    { label: "Happy Clients", value: 1200 },
    { label: "Projects Completed", value: 450 },
    { label: "Awards Won", value: 30 },
    { label: "Years of Experience", value: 10 },
  ];

  return (
    <section className="mb-24">
      <Seperator
        heading="Our Awesome Stats"
        text="Discover the impressive numbers behind our exceptional service and customer satisfaction."
      />
      <div className="container mx-auto px-4 py-24 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105"
            >
              <div className="text-5xl font-bold text-sky-500 mb-4">
                <CountUp end={stat.value} duration={3.5} separator="," />
                {stat.label === "Happy Clients" ||
                stat.label === "Years of Experience"
                  ? "+"
                  : ""}
              </div>
              <div className="text-xl font-medium text-gray-700">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
