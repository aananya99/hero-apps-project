import React, { Suspense } from "react";
import Banner from "../Components/Banner";
import States from "../Components/States";
import { Link, useLoaderData } from "react-router";
import Appcard from "./Appcard";


const Home = () => {
  const apps = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <States></States>

      <div className="w-11/12 mx-auto my-10">
        <div className="flex flex-col items-center gap-2 my-3">
          <h3 className="text-3xl font-bold">Trending Apps</h3>
          <p className="text-sm text-gray-400">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {apps.slice(0, 8).map((app) => (
            <Appcard key={app.id} app={app} />
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <Link to="/all-apps">
            <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-6 py-2 rounded-lg">
              Show All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
