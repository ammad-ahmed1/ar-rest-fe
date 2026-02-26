import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { explore_menu, explore_menu_mobile } from "../../data/homepage-data";
import SectionHeader from "./SectionHeader";
import ModalUI from "../shared/Modal";
import { useState } from "react";

const ExploreMenu = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };
  return (
    <div className="container-content ">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 mt-[25px]">
        <div className="flex flex-col ">
          <SectionHeader title="EXPLORE MENU" />
        </div>
        <div className="flex flex-col items-end">
          <h4 className="font-white md:font-semibold leading-none text-white tracking-widest">
            VIEW ALL
          </h4>
          <div className="w-[60px] h-[2px] bg-red-500 mt-1"></div>
        </div>
      </div>

      {/* Slider */}
      <div className="hidden lg:block relative">
        <Slider {...settings} className="explore-menu-slider">
          {explore_menu?.map((item) => (
            <div key={item.id} className="px-3">
              <div className="flex flex-col items-center cursor-pointer group">
                <div
                  className="
                    relative
                    w-full h-[180px]
                    bg-[#1c1816]
                    rounded-[50%_50%_3%_50%]
                    flex flex-col items-center justify-center
                    transition-transform duration-300 ease-in-out
                    group-hover:-translate-y-3
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[150px] contained mt-[-30px]"
                  />
                  <p className="mt-[-5px] text-sm">{item.title}</p>
                  <div className="w-[40px] h-[2px] mt-[10px] bg-red-500" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 bg-black rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Mobile View */}
      <div className="grid grid-cols-3 gap-1 h-[250px] lg:hidden">
        {/* Column 1 */}
        <div className="relative border border-dashed border-white rounded-sm overflow-hidden">
          <img
            src={explore_menu_mobile[0].image}
            alt={explore_menu_mobile[0].name}
            className="w-[100px] h-full object-contain"
          />

          {/* Name Top Overlay */}
          <div className="absolute top-0 left-0 w-full  text-white text-xs font-bold p-1 text-left">
            {explore_menu_mobile[0].name}
          </div>
        </div>

        {/* Column 2 */}
        <div className="grid grid-rows-2 gap-1 h-full">
          {explore_menu_mobile.slice(1, 3).map((item) => (
            <div
              key={item.id}
              className="relative border border-dashed border-white rounded-sm overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[100px] h-[81px] mt-[20px] object-contain"
              />

              <div className="absolute top-0 left-0 w-full  text-white text-xs font-bold p-1 text-left">
                {item.name}
              </div>
            </div>
          ))}
        </div>

        {/* Column 3 */}
        <div className="grid grid-rows-2 gap-1 h-full">
          {explore_menu_mobile.slice(3, 5).map((item) => (
            <div
              key={item.id}
              className="relative border border-dashed border-white rounded-sm overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[100px] h-[81px] mt-[20px] object-contain"
              />

              <div className="absolute top-0 left-0 w-full  text-white text-xs font-bold p-1 text-left">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreMenu;
