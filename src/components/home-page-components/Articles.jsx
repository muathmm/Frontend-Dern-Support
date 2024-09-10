import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Seperator from "./Seperator";
import image1 from "../../assets/banner/3.jpg";
import image2 from "../../assets/banner/7.jpeg";
import image3 from "../../assets/banner/4.webp";
export default function Articles() {
  const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   async function fetchArticles() {
  //     try {
  //       const response = await axios.get(
  //         `${import.meta.env.VITE_API_BASE_URL}/articles/getAll`
  //       );
  //       if (response.data.length > 0) {
  //         setArticles(response.data);
  //       } else {
  //         // Fallback to dummy data if API returns an empty array
  //         setArticles(dummyArticles);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching Articles:", error);
  //       // Fallback to dummy data if API call fails
  //       setArticles(dummyArticles);
  //     }
  //   }
  //   fetchArticles();
  // }, []);

  // Dummy data for fallback
  const dummyArticles = [
    {
      _id: "1",
      img: image1,
      title: "Article One",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      _id: "2",
      img: image2,
      title: "Article Two",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      _id: "3",
      img: image3,
      title: "Article Three",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
  ];

  const latestArticles = articles.slice(-3).reverse();

  return (
    <div className="container mx-auto px-4 my-28">
      {/* <h1 className="text-4xl font-bold text-center mb-12">
        Latest
        <span className="text-red-600 border-b-2 border-black"> Articles</span>
      </h1> */}
      <Seperator
        heading="Latest Articles "
        text="Stay updated with the latest news, tips, and insights from our experts in the field."
      />
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
        {/* {latestArticles.map((article) => ( */}
        {dummyArticles.map((article) => (
          <div
            key={article._id}
            className="article-card max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-500 hover:shadow-2xl w-full"
          >
            <img
              className=" w-full h-64 object-contain transform transition duration-500 hover:opacity-75 hover:cursor-pointer"
              src={article.img}
              alt={article.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-left">
                {article.title}
              </div>
              <p className="text-gray-700 text-base mb-4 line-clamp-4">
                {article.excerpt}
              </p>
              <div className="flex justify-center">
                <Link
                  to={`/articles/${article._id}`}
                  className="border border-sky-500 text-sky-500 px-4 py-2 rounded hover:bg-sky-500 hover:text-white transition-colors duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          to="/articles"
          className="inline-block bg-sky-500 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300 hover:bg-sky-700"
        >
          View More
        </Link>
      </div>
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Seperator from "./Seperator";

// export default function Articles() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     // Dummy data for testing
//     const dummyArticles = [
//       {
//         _id: "1",
//         img: "https://via.placeholder.com/400x250",
//         title: "Article One",
//         excerpt:
//           "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
//       },
//       {
//         _id: "2",
//         img: "https://via.placeholder.com/400x250",
//         title: "Article Two",
//         excerpt:
//           "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
//       },
//       {
//         _id: "3",
//         img: "https://via.placeholder.com/400x250",
//         title: "Article Three",
//         excerpt:
//           "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
//       },
//     ];

//     // Simulate fetching data
//     setArticles(dummyArticles);
//   }, []);

//   const latestArticles = articles.slice(-3).reverse();

//   return (
//     <div className="container mx-auto px-4 my-28">
//       {/* <h1 className="text-4xl font-bold text-center mb-12">
//         Latest
//         <span className="text-red-600 border-b-2 border-black"> Articles</span>
//       </h1> */}
//       <Seperator
//         heading="Latest Articles "
//         text="Expert support for both hardware repairs and software installations—keeping your systems running smoothly and efficiently."
//       />
//       <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
//         {latestArticles.map((article) => (
//           <div
//             key={article._id}
//             className="article-card max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-500 hover:shadow-2xl w-full"
//           >
//             <img
//               className="w-full h-64 object-contain transform transition duration-500 hover:opacity-75 hover:cursor-pointer"
//               src={article.img}
//               alt={article.title}
//             />
//             <div className="px-6 py-4">
//               <div className="font-bold text-xl mb-2 text-left">
//                 {article.title}
//               </div>
//               <p className="text-gray-700 text-base mb-4">{article.excerpt}</p>
//               <div className="flex justify-center">
//                 <Link
//                   to={`/articles/${article._id}`}
//                   className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
