import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faStar,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";


const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const apps = useLoaderData();
  const [installed, setInstalled] = useState(false);

  const selectedApps = apps.find((app) => app.id === appId);
  const {
    title,
    image,
    ratingAvg,
    downloads,
    companyName,
    reviews,
    description,
    size,
  } = selectedApps;

  const handleInstallbtn = () => {
    setInstalled(true);
    toast.success(`${title} installed Successfully`);
  };

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8 max-w-4xl mx-auto">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl border border-gray-100">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
          <div className="shrink-0">
            <img
              src={image}
              alt={title}
              className="w-full h-56 rounded-xl object-cover shadow-lg border border-gray-200"
            />
          </div>

          <div className="grow">
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
            <p className="text-sm text-gray-500 mt-1">
              Developed by{" "}
              <span className="font-medium text-gray-600">{companyName}</span>
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center text-center py-4 border-y border-gray-100 my-6">
          <div className="flex flex-col items-center flex-1 min-w-0 px-2">
            <FontAwesomeIcon
              icon={faDownload}
              className="text-2xl text-green-500 mb-1"
            />
            <p className="text-xl font-bold text-gray-800 truncate">
              {downloads}
            </p>
            <p className="text-xs text-gray-500 uppercase font-medium mt-1">
              Downloads
            </p>
          </div>

          <div className="flex flex-col items-center flex-1 min-w-0 px-2">
            <FontAwesomeIcon
              icon={faStar}
              className="text-2xl text-amber-500 mb-1"
            />
            <p className="text-xl font-bold text-gray-800">{ratingAvg}</p>
            <p className="text-xs text-gray-500 uppercase font-medium mt-1">
              Avg Ratings
            </p>
          </div>

          <div className="flex flex-col items-center flex-1 min-w-0 px-2">
            <FontAwesomeIcon
              icon={faCommentDots}
              className="text-2xl text-purple-600 mb-1"
            />
            <p className="text-xl font-bold text-gray-800 truncate">
              {reviews}
            </p>
            <p className="text-xs text-gray-500 uppercase font-medium mt-1">
              Total Reviews
            </p>
          </div>
        </div>

        <button
          onClick={handleInstallbtn}
          disabled={installed}
          className={`w-full py-3 font-bold rounded-lg transition-colors duration-200 shadow-md
          ${
            installed
              ? "bg-green-500 cursor-not-allowed text-white"
              : "bg-green-500 text-white "
          }`}
        >
          {installed ? " Installed" : `Install Now (${size} MB)`}
        </button>
      </div>

      {/* ratings Section */}


      {/* Description Section */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">
          Description
        </h2>
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
