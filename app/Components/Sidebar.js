import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { TfiMedallAlt } from "react-icons/tfi";
import { FaUserGraduate } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="px-2 py-3 flex flex-col w-1/6 border-r-2 min-h-screen">
      <div className="flex items-center font-bold text-2xl text-slate-800 bg-white justify-start p-5 rounded-3xl m-1 hover:bg-gray-200 transition-colors duration-200">
        <BiSolidDashboard className="mr-3" />
        Dashboard
      </div>
      <div className="flex items-center font-bold text-2xl text-slate-800 bg-white justify-start p-5 rounded-3xl m-1 hover:bg-gray-200 transition-colors duration-200">
        <TfiMedallAlt className="mr-3" />
        Skill Test
      </div>
      <div className="flex items-center font-bold text-2xl text-slate-800 bg-white justify-start p-5 rounded-3xl m-1 hover:bg-gray-200 transition-colors duration-200">
        <FaUserGraduate className="mr-3" />
        Internship
      </div>
    </div>
  );
};

export default Sidebar;
