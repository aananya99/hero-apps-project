import React, { Suspense } from "react";
import Banner from "../Components/Banner";
import States from "../Components/States";
import TrendingApps from "./TrendingApps";
const loaderData = () => fetch("/apps.json").then((res) => res.json());
const Home = () => {
  const promiseData = loaderData();
  return (
    <div>
      <Banner></Banner>
      <States></States>
      <Suspense fallback={<h2>Data is loading</h2>}>
        <TrendingApps promiseData={promiseData}></TrendingApps>
      </Suspense>
    </div>
  );
};

export default Home;
