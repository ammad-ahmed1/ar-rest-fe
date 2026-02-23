import React from "react";
import { best_sellers } from "../../data/homepage-data";
import SectionHeader from "./SectionHeader";
import KfcCardBadge from "./KfcCardBadge";

const BestSellers = () => {
  return (
    <div className="container-content py-10">
      {/* Header */}
      <SectionHeader title="BEST SELLERS" />

      <div className="flex gap-4 overflow-x-auto best-sellers-scroll">
        {best_sellers?.map((item) => (
          <div
            key={item.id}
            className="w-[190px] md:w-[205px] lg:w-[265px] 2xl:w-[300px] relative flex-shrink-0 bg-[#1C1816] overflow-hidden rounded-sm shadow-lg"
          >
            <KfcCardBadge />
            <div className="product-name absolute top-[12%] left-[4%]">
              <h3 className="text-lg font-bold ">{item.title}</h3>
            </div>

            <span
              className=" absolute right-0 top-[80px] 
                 w-[80px] h-[28px] 
                 px-[15px] py-[2px] 
                 text-white font-extrabold 
                 leading-[24px] whitespace-nowrap bg-[#ea002a]
                 text-center"
            >
              <span className="flex items-end justify-center h-full ">
                Rs&nbsp;{item?.price}
              </span>

              {/* Triangle */}
              <span
                className="absolute top-0 left-[-8px]
             w-0 h-0
             border-t-[14px] border-b-[14px]
             border-r-[8px]
             border-t-transparent
             border-b-transparent
             border-r-[#ea002a]"
              ></span>
            </span>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[290px] object-contain mt-[50px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
