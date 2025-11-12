import React from "react";
import logoImg from "../assets/logo.png";
import gitImg from "../assets/git.png";
import { Link, NavLink } from "react-router";
const Navbar = () => {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/all-apps">Apps</NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <div className="flex flex-col gap-1">{links}</div>
          </ul>
        </div>
        <div className="flex justify-between items-center gap-1">
          <img className="h-[30px]" src={logoImg} alt="" />
          <p className="text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold underline">
            HERO.IO
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <div className="flex justify-between gap-1">{links}</div>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="https://github.com/aananya99">
          <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
            <img src={gitImg} alt="" />
            Contribute
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
