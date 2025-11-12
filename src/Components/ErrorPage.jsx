import React from "react";
import errorImg from "../assets/error-404.png";
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <div className="mx-auto my-10">
      <div className="flex flex-col gap-3 items-center">
        <img src={errorImg} alt="" />
        <h2 className="text-2xl font-bold">Opps,page not found! </h2>
        <p className="text-gray-600">
          The page you are looking for is not available
        </p>
        <Link to="/">
          {" "}
          <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
