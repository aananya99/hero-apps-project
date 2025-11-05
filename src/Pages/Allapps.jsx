import React from "react";
import { useLoaderData } from "react-router";
import Appcard from "./Appcard";

const AllApps = () => {
  const apps = useLoaderData();

  return (
    <div>
      <div className="flex flex-col items-center gap-2 my-3">
        <h3 className="text-3xl font-bold">Our All Applications</h3>
        <p className="text-sm text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between gap-2 items-center">
        <h3 className="text-lg font-semibold">({apps.length}) Apps Found</h3>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search Apps" />
        </label>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3 my-10">
        {apps.map((app) => (
          <Appcard key={app.id} app={app}></Appcard>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
