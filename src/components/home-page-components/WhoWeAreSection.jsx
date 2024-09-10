import React from "react";
import Seperator from "./Seperator";
import image from "../../assets/homeimages/whoweare.png";

function WhoWeAreSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <Seperator
            heading="Who We Are"
            text="Learn more about our dedicated team and our commitment to delivering top-notch computer support."
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center ">
          <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-12">
            <img
              src={image}
              alt="Who We Are"
              className="w-full max-w-lg h-auto object-cover rounded-lg"
            />
          </div>
          <div className="text-center lg:text-left max-w-md">
            <h3 className="text-2xl font-semibold mb-6 text-sky-600 ">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg">
              We are dedicated to providing exceptional support for both
              hardware and software needs. Our team ensures your systems operate
              smoothly and efficiently with top-notch repair and installation
              services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreSection;
