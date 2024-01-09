import React from "react";
import Logo from "../assets/SideBarLogo.png";
import Bottomoptions from "../assets/SvgFiles/Bottomoptions.svg";
import Home from "../assets/SvgFiles/Home.svg";
import Orders from "../assets/SvgFiles/Orders.svg";
import Product from "../assets/SvgFiles/Product.svg";
import Delivery from "../assets/SvgFiles/Delivery.svg";
import Marketing from "../assets/SvgFiles/Marketing.svg";
import Analytic from "../assets/SvgFiles/Analytic.svg";
import Payment from "../assets/SvgFiles/Payment.svg";
import Tools from "../assets/SvgFiles/Tools.svg";
import Discounts from "../assets/SvgFiles/Discounts.svg";
import Audience from "../assets/SvgFiles/Orders.svg";
import Appearance from "../assets/SvgFiles/Appearance.svg";
import Plugins from "../assets/SvgFiles/Plugins.svg";
import Wallet from "../assets/SvgFiles/Wallet.svg";

export default function SideBar() {
  const navbarMenu = [
    {
      logo: Home,
      name: "Home",
    },
    {
      logo: Orders,
      name: "Orders",
    },
    {
      logo: Product,
      name: "Products",
    },
    {
      logo: Delivery,
      name: "Delivery",
    },
    {
      logo: Marketing,
      name: "Marketing",
    },
    {
      logo: Analytic,
      name: "Analytics",
    },
    {
      logo: Payment,
      name: "Payments",
    },
    {
      logo: Tools,
      name: "Tools",
    },
    {
      logo: Discounts,
      name: "Discounts",
    },
    {
      logo: Audience,
      name: "Audience",
    },
    {
      logo: Appearance,
      name: "Appearance",
    },
    {
      logo: Plugins,
      name: "Plugins",
    },
  ];

  return (
    <div className="sidebarBcg p-[3.421%] inter flex flex-col justify-between items-center h-full text-white gap-12">
      <div className="flex flex-col gap-4 w-full">
        {/* top logo section  */}
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <img src={Logo} alt="" />
            <div className="flex flex-col gap-1">
              <p className="text-[0.9375rem] font-[500]">Nishyan</p>
              <span className="text-[0.8125rem] font-[400] underline">
                Visit Store
              </span>
            </div>
          </div>

          <img className="w-[1.25rem] h-[1.25rem]" src={Bottomoptions} alt="" />
        </div>
        {/* All navigation option  */}
        <div className="flex flex-col gap-2">
          {navbarMenu?.map((ele, i) => {
            return (
              <div key={i} className=" flex gap-3 py-2 px-4">
                <img
                  className="w-[1.25rem] h-[1.25rem]"
                  src={ele.logo}
                  alt=""
                />
                <p className="text-[ 0.875rem] font-[500]">{ele.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* bottom wallet section */}
      <div className="w-full flex gap-3 py-2 px-4 items-center rounded-[0.25rem] bg-[#353C53]">
        <img className="w-[1.25rem] h-[1.25rem]" src={Wallet} alt="" />
        <div>
          <p>Available credits</p>
          <span>222.10</span>
        </div>
      </div>
    </div>
  );
}
