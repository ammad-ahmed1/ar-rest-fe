import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/ui/Hero";
import ExploreMenu from "../components/ui/ExploreMenu";
import BestSellers from "../components/ui/BestSellers";
import TopDeals from "../components/ui/TopDeals";
import Footer from "../components/layout/Footer";
import Layout from "../components/layout/Layout";

const Homepage = () => {
  return (
    <div className="">
      {/* <div className="h-[95px] md:h-[110px] lg:h-[90px] xl:h-[90px]"></div> */}
      <Hero />
      <ExploreMenu />
      <BestSellers />
      <TopDeals />
    </div>
  );
};

export default Homepage;
