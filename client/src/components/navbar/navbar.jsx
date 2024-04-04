import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="mb-20">
      <nav className="mt-0 fixed w-full z-10 top-0 px-4 py-4 bg-pink-700 flex justify-between">
        <ul className="flex space-x-10  text-white px-20">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer" onClick={()=>navigate("/quizTitle")}>Create Exam</li>
          <li className="cursor-pointer">Show Report</li>
          <li className="cursor-pointer" onClick={()=>navigate("/selectTitle")}>My TestList</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;