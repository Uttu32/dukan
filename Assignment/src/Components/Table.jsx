import React from "react";
import SearchIcon from "../assets/SvgFiles/SearchIcon.svg";
import Updown from "../assets/SvgFiles/Updown.svg";
import Downloadoption from "../assets/SvgFiles/Downloadoption.svg";

export default function Table() {
  let tableData = [
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "₹1,278.23",
      fees: "₹22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "₹1,278.23",
      fees: "₹22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "₹1,278.23",
      fees: "₹22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "₹1,278.23",
      fees: "₹22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "₹1,278.23",
      fees: "₹22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "₹1,278.23",
      fees: "₹22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "₹1,278.23",
      fees: "₹22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "₹1,278.23",
      fees: "₹22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "₹1,278.23",
      fees: "₹22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "₹1,278.23",
      fees: "₹22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "₹1,278.23",
      fees: "₹22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "₹1,278.23",
      fees: "₹22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "₹1,278.23",
      fees: "₹22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "₹1,278.23",
      fees: "₹22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "₹1,278.23",
      fees: "₹22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "₹1,278.23",
      fees: "₹22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "₹1,278.23",
      fees: "₹22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "₹1,278.23",
      fees: "₹22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "₹1,278.23",
      fees: "₹22",
    },
  ];
  return (
    <div className="inter w-full bg-white py-2 px-3 flex flex-col gap-4 items-center pb-6">
      {/* top search bar and sort options  */}
      <div className="flex justify-between items-center w-full ">
        {/* search bar  */}
        <div className="relative w-[20%]">
          <input
            type="text"
            className="outline-none border w-full pl-9 py-2 border-[#D9D9D9] rounded-[0.25rem]"
            placeholder="Search by order ID..."
          />
          <img className="absolute top-3 left-3" src={SearchIcon} alt="" />
        </div>
        {/* sort option  */}
        <div className="flex gap-4 ">
          <p className="flex gap-2 px-2 py-1 rounded-[0.25rem] border border-[#D9D9D9]">
            Sort <img src={Updown} alt="" />
          </p>
          <img
            className="rounded-[0.25rem] border border-[#D9D9D9] px-2"
            src={Downloadoption}
            alt=""
          />
        </div>
      </div>

      <table className="w-full">
        <thead className="bg-[#F2F2F2] rounded-[0.25rem] w-full">
          <tr className=''>
            <td className="text-left px-4 py-2 text-[0.875rem] font-[500] text-[#4D4D4D] ">Order ID</td>
            <td className="text-right px-4 py-2 text-[0.875rem] font-[500] text-[#4D4D4D] ">Order date</td>
            <td className="text-right px-4 py-2 text-[0.875rem] font-[500] text-[#4D4D4D] ">Order amount</td>
            <td className="text-right px-4 py-2 text-[0.875rem] font-[500] text-[#4D4D4D] ">Transaction fees</td>
          </tr>
        </thead>
        <tbody>
          {tableData.map((ele, i) => {
            return (
              <tr key={i} className="border-b border-[#F2F2F2]">
                <td className="text-left px-4 py-2 blueColor text-[0.875rem] font-[500]">{ele.id}</td>
                <td className="text-right px-4 py-2 text-[0.875rem] font-[400] ">{ele.date}</td>
                <td className="text-right px-4 py-2 text-[0.875rem] font-[400] ">{ele.amount}</td>
                <td className="text-right px-4 py-2 text-[0.875rem] font-[400] ">{ele.fees}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex items-center gap-4">
        <p className="rounded-[0.25rem] border border-[#D9D9D9] bg-white px-4 py-1">Previous</p>
        <div className="flex gap-2">
            <p>1</p>
            <p>...</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
            <p>13</p>
            <p>14</p>
            <p>15</p>
            <p>16</p>
            <p>17</p>
            <p>18</p>
        </div>
        <p className="rounded-[0.25rem] border border-[#D9D9D9] bg-white px-4 py-1">Next</p>
      </div>
    </div>
  );
}
