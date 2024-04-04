import React from "react";

const LandingNavBar = () => {
  return (
    <div className="">
      <nav className="mt-0 fixed w-full z-10 top-0 px-4 py-4  bg-[#b3ecec] ">
        <div className="flex justify-between">
          <div className="flex justify-start text-gray-600 ml-10">Logo</div>
          <div className="flex space-x-10 text-gray-600 px-20  justify-end ">
            <a className="cursor-pointer">Home</a>
            <a className="cursor-pointer">About</a>
            <a className="cursor-pointer">Contact</a>
            <a className="cursor-pointer">Join Us</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LandingNavBar;
