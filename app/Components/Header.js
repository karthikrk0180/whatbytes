"use client";

import MyLogo from "../assets/logo.svg";

import React, { use } from "react";

const user = {
  image: "https://avatars.githubusercontent.com/u/126350150?v=4",
  name: "Karthik R Khatavkar",
};

const Header = () => {
  return (
    <div className="header bg-white w-full h-24 border-b-2 p-4 flex justify-between ">
      <div className="logo size-64 items-center">
        <MyLogo />
      </div>
      <div className="account flex border-2 border-slate-200 rounded-md p-3  justify-center items-center ">
        <img src={user.image} className="w-12 h-12 rounded-full p-1" />
        <text className="name px-1 font-bold text-xl">{user.name} </text>
      </div>
    </div>
  );
};

export default Header;
