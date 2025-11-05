import React, { use } from "react";
import Appcard from "./Appcard";

const TrendingApps = ({ promiseData }) => {
  const apps = use(promiseData);
  console.log(apps);

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-3xl font-bold">Trending Apps</h3>
        <p className="text-sm text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {apps.map((app) => (
        <Appcard key={app.id} app={app}></Appcard>
      ))}
      </div> */}

         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {apps.slice(0, 8).map((app) => (
        <Appcard key={app.id} app={app} />
      ))}
    </div>
    

    </div>
  );
};

export default TrendingApps;
