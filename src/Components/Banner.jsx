import React from "react";
import playImg from "../assets/playstore.png";
import appImg from "../assets/appStore.jfif";
import bannerImg from "../assets/hero.png";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <h2 className="text-5xl font-bold text-center">
        We Build <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
          Productive
        </span>{" "}
        Apps
      </h2>
      <p className="text-gray-500 text-lg text-center">
        At HERO.IO ,we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex gap-2">
        <Link to="https://play.google.com/store/games?device=windows">
          {" "}
          <button className="btn">
            {" "}
            <img className="h-[30px]" src={playImg} alt="" /> Google Play
          </button>
        </Link>

        <Link to="https://www.apple.com/app-store/">
          {" "}
          <button className="btn">
            <img className="h-[30px]" src={appImg} alt="" />
            App Store{" "}
          </button>
        </Link>
      </div>
      <img src={bannerImg} alt="" />
    </div>
  );
};

export default Banner;
