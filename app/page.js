"use client";

import Body from "./Components/Body";
import Header from "./Components/Header";
import Parameters from "./Components/Parameters";
import Sidebar from "./Components/Sidebar";

const Page = () => (
  <div>
    <Header />
    <div className="flex">
      <Sidebar />
      <Body />
      <Parameters/>
    </div>
  </div>
);

export default Page;
