import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Appcard from "./Appcard";

const AllApps = () => {
  const apps = useLoaderData();
  const [search, setSearch] = useState("");

  // Filter logic (case-insensitive)
  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col items-center gap-2 my-3">
        <h3 className="text-3xl font-bold">Our All Applications</h3>
        <p className="text-sm text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Search + Count */}
      <div className="flex flex-col md:flex-row justify-between gap-3 items-center">
        <h3 className="text-lg font-semibold">
          ({filteredApps.length}) Apps Found
        </h3>

        <label className="input input-bordered flex items-center gap-2 w-full md:w-1/3">
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
          <input
            type="search"
            placeholder="Search Apps"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="grow outline-none"
          />
        </label>
      </div>

      {/* App List */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3 my-10">
        {filteredApps.length > 0 ? (
          filteredApps.map((app) => (
            <Appcard key={app.id} app={app}></Appcard>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full text-lg">
            🚫 No App Found
          </p>
        )}
      </div>
    </div>
  );
};

export default AllApps;
