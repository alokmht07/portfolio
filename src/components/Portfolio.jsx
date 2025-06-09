import React from "react";
import kiranawala from "../assets/portfolio/kiranawala.png";
import dynamicResume from "../assets/portfolio/dynamicResume.png";
import filterData from "../assets/portfolio/filterData.png";
import reactEcom from "../assets/portfolio/reactEcom.png";
import weatherApp from "../assets/portfolio/weatherApp.png";
import todoApp from "../assets/portfolio/todoApp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: kiranawala,
      link: "https://kiranawalaclient.vercel.app",
      repo: "https://github.com/alokmht07/KIRANAWALA",
    },
    {
      id: 2,
      src: dynamicResume,
      link: "https://dynamic-resume-client.vercel.app",
      repo: "https://github.com/alokmht07/dynamic_resume_designer",
    },
    {
      id: 3,
      src: filterData,
      link: "https://reactfilter.netlify.app",
      repo: "https://github.com/alokmht07/filter_data_frontend",
    },
    {
      id: 4,
      src: reactEcom,
      link: "https://alok-react-ecom.netlify.app",
      repo: "https://github.com/alokmht07/React_Ecommerce_Website",
    },
    {
      id: 5,
      src: weatherApp,
      link: "https://rjs-weather-app.netlify.app",
      repo: "https://github.com/alokmht07/weather_app",
    },
    {
      id: 6,
      src: todoApp,
      link: "https://rjsc-todo-app.netlify.app",
      repo: "https://github.com/alokmht07/ToDo_List",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(link, "_blank")}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(repo, "_blank")}
                >
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
