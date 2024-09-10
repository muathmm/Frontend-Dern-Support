import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/dern-logo.png";
import { IoSend } from "react-icons/io5";
const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "#",
    display: "Privacy Policy",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/articles",
    display: "Articles",
  },
  {
    path: "/products",
    display: "Products",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-customLight text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Logo and Description */}
          <div className="w-full lg:w-1/3 md:w-1/2 sm:w-full mb-8 pr-5 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start mb-4">
              <Link to="/home">
                <img
                  src={logo}
                  alt="dern support Logo"
                  className="w-max h-28"
                />
              </Link>
            </div>
            <p className="sm:text-left">
              Dern Support: We are dedicated to providing exceptional support
              for both hardware and software needs. Our team ensures your
              systems operate smoothly and efficiently with top-notch repair and
              installation services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full lg:w-1/6 md:w-1/4 sm:w-1/2 mb-8 text-center sm:text-left">
            <h5 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h5>
            <ul>
              {quickLinks.map((item, index) => (
                <li key={index} className="mb-3">
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Head Office */}
          <div className="w-full lg:w-1/4 md:w-1/4 sm:w-1/2 mb-8 text-center sm:text-left">
            <h5 className="text-lg font-semibold text-white mb-4">
              Head Office
            </h5>
            <p>Marg Al Hammam, Amman, Jordan</p>
            <p>Phone: +96261234567</p>
            <p>Email: Info@DernSupport.com</p>
            <p>Company Time: 9am - 7pm</p>
          </div>

          {/* Newsletter */}
          <div className="w-full lg:w-1/4 md:w-1/2 sm:w-full mb-8 text-center sm:text-left">
            <h5 className="text-lg font-semibold text-white mb-4">
              Newsletter
            </h5>
            <p className="mb-4">Subscribe to our newsletter</p>
            <div className="flex justify-center sm:justify-start">
              <input
                type="email"
                placeholder="Email"
                className="w-full max-w-xs p-2 rounded-l-lg focus:outline-none"
              />
              <button className="bg-sky-500 text-white p-3 rounded-r-lg hover:bg-sky-600">
                <IoSend />
              </button>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="w-full text-center border-t border-gray-700 pt-4">
            <p className="flex items-center justify-center gap-1 text-gray-400">
              <i className="ri-copyright-line"></i>Copyright {year}, Developed
              by Team. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import { FaCopyright, FaGithub, FaLinkedin } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import "sweetalert2/src/sweetalert2.scss";

// function Footer() {
//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     const email = e.target.elements.email.value;

//     Swal.fire({
//       icon: "success",
//       title: "Subscription Successful!",
//       text: `Thank you for subscribing with ${email}`,
//     });
//   };
//   const links = [
//     {
//       id: 1,
//       title: "Home",
//       url: "/",
//     },
//     {
//       id: 2,
//       title: "Products",
//       url: "/products",
//     },
//     {
//       id: 3,
//       title: "Articles",
//       url: "/articles",
//     },
//     {
//       id: 4,
//       title: "Services",
//       url: "/services",
//     },
//   ];
//   const articles = [
//     {
//       id: 1,
//       title: "Computer",
//       url: "/articles/6677d63eb79d74859d67cbfc",
//     },
//     {
//       id: 2,
//       title: "Printers",
//       url: "/articles/6677d5d2b79d74859d67cbfa",
//     },
//     {
//       id: 3,
//       title: "Wifi",
//       url: "/articles/6677d69cb79d74859d67cbfe",
//     },
//   ];
//   return (
//     <footer className="border-t-2 border-black mt-10">
//       <div className="container flex flex-col sm:flex-row justify-around items-center px-6 py-10 gap-5 mx-auto">
//         <div className="flex justify-between gap-6 lg:space-x-40">
//           <div className="pages">
//             <p className="font-semibold text-black">Quick Link</p>
//             <div className="flex flex-col items-start mt-2 space-y-2">
//               {links.map((link) => (
//                 <Link
//                   key={link.id}
//                   to={link.url}
//                   className="transition-colors duration-300 text-gray-700 dark:hover:text-red-400 hover:underline hover:cursor-pointer hover:text-black"
//                 >
//                   {link.title}
//                 </Link>
//               ))}
//             </div>
//           </div>
//           <div className="problems">
//             <p className="font-semibold text-black">Need Help</p>
//             <div className="flex flex-col items-start mt-5 space-y-2">
//               {articles.map((article) => (
//                 <Link
//                   to={article.url}
//                   key={article.id}
//                   className="group transition-colors duration-300 text-gray-700 hover:underline hover:cursor-pointer hover:text-black"
//                 >
//                   {article.title}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
//           <div className="flex gap-4 hover:cursor-pointer">
//             <a
//               target="_blank"
//               href="https://www.linkedin.com/in/amrmohamedgouda/"
//             >
//               <FaLinkedin className="w-10 h-10 text-black" />
//             </a>
//             <a target="_blank" href="https://github.com/3mrgouda">
//               <FaGithub className="w-10 h-10 text-black" />
//             </a>
//           </div>
//           <p className="font-sans text-start md:text-center md:text-lg md:p-4 text-black">
//             <FaCopyright className="inline-block" /> 2023
//             <a
//               className="border-b border-black md:text-xl"
//               target="_blank"
//               href="https://www.linkedin.com/in/amrmohamedgouda/"
//             >
//               <span className="font-bold text-red-600">Dern</span>
//               Support
//             </a>
//             Inc. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
