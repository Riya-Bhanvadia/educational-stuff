import React from "react";
import landing from "../../utils/landing.png";

const LandingBody = () => {
  return (
    <div className="bg-[#b3ecec] min-h-screen ">
      <div className="mt-14 flex justify-between">
        <div className="flex ml-14 mt-28 flex-col">
          <div className="font-extrabold text-6xl flex">
            Ignite Learning, <br /> Inspire Growth
          </div>

          <p className="flex text-white bg-[#3bd6c6] rounded-3xl p-8">
            Educate, Engage, Empower: Create <br /> quizzes, share videos,
            <br /> and explore educational resources all in one place! <br />
            Empower your journey with cutting-edge <br /> resources and
            transformative learning experiences.
          </p>
        </div>
        <div className="flex justify-items-end mr-36 ">
          <img src={landing} alt="" className="mt-14" />
        </div>
      </div>
    </div>
  );
};

export default LandingBody;
