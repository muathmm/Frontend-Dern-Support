import React, { useState, useEffect } from "react";
import img1 from "../../assets/banner/1.jpg";
import img2 from "../../assets/banner/2.jpeg";
import img3 from "../../assets/banner/3.jpg";
import img4 from "../../assets/banner/4.webp";
import img5 from "../../assets/banner/5.jpg";
import img7 from "../../assets/banner/7.jpeg";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../../CSS/Hero.css";

function Hero() {
  const img = [img1, img2, img3, img4, img5, img7];
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the width threshold as needed
    };

    handleResize(); // Check the screen size initially
    window.addEventListener("resize", handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on component unmount
    };
  }, []);

  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots) => (
      <div className="dots-container">
        <ul>{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Conditional rendering for small screen */}
      {isSmallScreen ? (
        <div className="relative w-full h-full">
          <img
            src={img1}
            className="w-full h-full object-cover"
            alt="Static Image"
          />
        </div>
      ) : (
        <Slider {...settings}>
          {img.map((image, index) => (
            <div key={index} className="relative w-full h-full">
              <img
                src={image}
                className="w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Text and Button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 z-20">
        <div className="max-w-lg w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Welcome to Dern Support
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 drop-shadow-md">
            Your one-stop solution for computer repairs and support.
          </p>
          <Link
            to="/services" // Change href to 'to' for React Router
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
