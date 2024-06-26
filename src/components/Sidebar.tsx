import React from "react";
import { FaUser, FaEnvelope, FaBriefcase, FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <nav className="flex flex-col gap-14 h-2/3 w-14 rounded-full bg-amber-400 items-center justify-center py-10 text-white">
      <FaHome size={20} className="cursor-pointer"></FaHome>
      <FaUser size={20} className="cursor-pointer"></FaUser>
      <FaBriefcase size={20} className="cursor-pointer"></FaBriefcase>
      <FaEnvelope size={20} className="cursor-pointer"></FaEnvelope>
    </nav>
  );
};

export default Sidebar;
