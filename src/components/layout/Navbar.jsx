import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { RiMenu2Line } from "react-icons/ri";
import ButtonUI from "../shared/Button";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("delivery");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="fixed top-0 left-0 right-0 z-50 bg-background">
        <div className="container-content py-1 pb-2 md:pb-2 md:py-3 lg:py-6">
          <div className="flex justify-between">
            <div className="left flex gap-4 items-center">
              <div
                className="cursor-pointer"
                onClick={() => setSidebarOpen(true)}
              >
                <RiMenu2Line
                  size={26}
                  className="text-foreground font-weight-bold"
                />
              </div>
              <img
                src={logo}
                alt="Logo"
                style={{ height: "36px", cursor: "pointer" }}
                onClick={() => navigate("/")}
              />
              <span className="hidden md:flex gap-2 ">
                <ButtonUI
                  variant="secondary"
                  px={3}
                  isActive={selectedOption === "delivery"}
                  onClick={() => handleOptionClick("delivery")}
                >
                  <img
                    src="https://www.kfcpakistan.com/static/media/Delivery.793adbaa710baf75ba78.png"
                    alt="Delivery"
                    style={{ height: "20px" }}
                  />
                  <span style={{ marginLeft: "4px" }}>DELIVERY</span>
                </ButtonUI>
                <ButtonUI
                  variant="secondary"
                  px={3}
                  isActive={selectedOption === "pickup"}
                  onClick={() => handleOptionClick("pickup")}
                >
                  <img
                    src="https://www.kfcpakistan.com/static/media/pickup.47bb874f83ea6acb5a47.png"
                    alt="Pickup"
                    style={{ height: "20px" }}
                  />
                  <span style={{ marginLeft: "2px" }}>PICKUP</span>
                </ButtonUI>
                <ButtonUI
                  variant="secondary"
                  px={3}
                  isActive={selectedOption === "merchant"}
                  onClick={() => handleOptionClick("merchant")}
                >
                  <img
                    src="https://www.kfcpakistan.com/static/media/kfc_merch_icon.2fbdafb9a4c96d69df4a.png"
                    alt="Merch"
                    style={{ height: "20px" }}
                  />
                  <span style={{ marginLeft: "2px" }}>MERCH</span>
                </ButtonUI>
              </span>
            </div>
            <div className="hidden lg:flex items-center ">
              <ButtonUI variant="secondary">
                <div className="flex flex-col text-left leading-tight">
                  <span>Delivering To</span>
                  <span className="truncate max-w-[70px] md:max-w-[250px] text-[13px] font-medium">
                    760 / Nargis block / Allama iqbal town / Arslan Bajwa Road,
                    Nargis Block, Allama Iqbal Town, Model Town Tehsil, Lahore
                    District, Lahore Division, Punjab, 54786, Pakistan
                  </span>
                </div>
              </ButtonUI>
            </div>
            <div className="right flex flex items-center">
              <ButtonUI variant="transparent" sx={{ p: 0 }}>
                <img
                  src="https://www.kfcpakistan.com/static/media/bucket-filled.5ed4fd2893f4b6af2b06.svg"
                  alt="Bucket"
                  style={{ height: "40px" }}
                />
              </ButtonUI>
              <ButtonUI variant="primary" onClick={() => navigate("/login")}>
                LOGIN
              </ButtonUI>
            </div>
          </div>
          <span className="flex md:hidden gap-4 mt-2">
            <ButtonUI
              variant="secondary"
              px={4}
              isActive={selectedOption === "delivery"}
              onClick={() => handleOptionClick("delivery")}
            >
              <img
                src="https://www.kfcpakistan.com/static/media/Delivery.793adbaa710baf75ba78.png"
                alt="Delivery"
                style={{ height: "20px" }}
              />
              <span style={{ marginLeft: "4px" }}>DELIVERY</span>
            </ButtonUI>
            <ButtonUI
              variant="secondary"
              px={4}
              isActive={selectedOption === "pickup"}
              onClick={() => handleOptionClick("pickup")}
            >
              <img
                src="https://www.kfcpakistan.com/static/media/pickup.47bb874f83ea6acb5a47.png"
                alt="Pickup"
                style={{ height: "20px" }}
              />
              <span style={{ marginLeft: "2px" }}>PICKUP</span>
            </ButtonUI>
            <ButtonUI
              variant="secondary"
              px={4}
              isActive={selectedOption === "merchant"}
              onClick={() => handleOptionClick("merchant")}
            >
              <img
                src="https://www.kfcpakistan.com/static/media/kfc_merch_icon.2fbdafb9a4c96d69df4a.png"
                alt="Merch"
                style={{ height: "20px" }}
              />
              <span style={{ marginLeft: "2px" }}>MERCH</span>
            </ButtonUI>
          </span>
          <div className="hidden md:flex justify-center mt-2 lg:hidden items-center ">
            <ButtonUI variant="secondary">
              <div className="flex flex-col text-left leading-tight">
                <span>Delivering To</span>
                <span className="truncate max-w-[150px] md:max-w-[250px] text-[13px] font-medium">
                  760 / Nargis block / Allama iqbal town / Arslan Bajwa Road,
                  Nargis Block, Allama Iqbal Town, Model Town Tehsil, Lahore
                  District, Lahore Division, Punjab, 54786, Pakistan
                </span>
              </div>
            </ButtonUI>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
