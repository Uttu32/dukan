import React, { useState } from "react";
import SideBar from "./Components/SideBar";
import Header from "./Components/Header";
import Bottomoptions from "./assets/SvgFiles/BottomOptionsTwo.svg";
import Table from "./Components/Table";

function App() {
  return (
    <div className="red flex inter">
      {/* left section / side bar */}
      <aside className="w-[15%]">
        <SideBar />
      </aside>
      {/* main section  */}
      <div className="w-full flex flex-col items-center bg-[#FAFAFA] gap-4">
        {/* header  */}
        <Header />

        <div className="w-[90%] flex flex-col gap-4">
          {/* overview and lastmonth dropdown  */}
          <div className="w-full flex justify-between items-center">
            <p className="text-[#1A181E] text-[1.25rem] font-[500]">Overview</p>
            <div className="flex items-center text-[#4D4D4D] text-[1rem] font-[400] gap-2 border border-[#D9D9D9] px-4 py-1 rounded-[0.25rem] bg-white">
              <p>Last Month</p>
              <img src={Bottomoptions} alt="" />
            </div>
          </div>

          {/* online orders and amount received */}
          <div className="flex inter justify-between">
            <div className="w-[49%] p-6 flex flex-col gap-4 bg-white ">
              <p className="text-[#4D4D4D] text-[1rem] font-[400]">
                Online orders
              </p>
              <span className="text-[#1A181E] text-[2rem] font-[500]">231</span>
            </div>
            <div className="w-[49%] p-6 flex flex-col gap-4 bg-white    ">
              <p className="text-[#4D4D4D] text-[1rem] font-[400]">
                Amount received
              </p>
              <span className="text-[#1A181E] text-[2rem] font-[500]">
                ₹23,92,312.19
              </span>
            </div>
          </div>

          {/* transactions and This month  */}
          <p className="text-[1.25rem] font-[500] text-[#1A181E]">
            Transactions | This Month
          </p>

          <div className="w-full">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
