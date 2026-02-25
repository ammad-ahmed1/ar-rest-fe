import Button from "@mui/material/Button";
import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const slideImages = [
  "https://www.kfcpakistan.com/images/58e34a10-0cc4-11f1-bef6-77867c9f4fed-Webbanner_desktop_image-2026-02-18122126.jpeg",
  "https://www.kfcpakistan.com/images/58e3bf40-0cc4-11f1-aaae-51cfe0610bb2-WebBanner_desktop_image-2026-02-18122126.jpg",
  "https://www.kfcpakistan.com/images/58e34a10-0cc4-11f1-bef6-77867c9f4fed-RamzanBucket_desktop_image-2026-02-18122126.jpeg",
  "https://www.kfcpakistan.com/images/4aac1fe0-0e21-11f1-acfa-73c32d985418-CremeConeWebBanner_desktop_image-2026-02-20055917.jpg",
  "https://www.kfcpakistan.com/images/9fe8e0f0-f112-11f0-97d3-1f3c40e25119-Merch_desktop_image-2026-01-14063114.jpeg",
];

const SlideImage = ({ src, onClick }) => (
  <div className="cursor-pointer" onClick={onClick}>
    <img src={src} alt="Hero Image" className="w-full contained-object" />
  </div>
);

const Hero = () => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    pauseOnHover: true,
  };

  return (
    <>
      <div className="hero-slider relative !w-full">
        <Slider {...settings}>
          {slideImages.map((src, index) => (
            <SlideImage key={index} src={src} onClick={() => navigate("/menu")} />
          ))}
        </Slider>
      </div>
      <div className="flex justify-center mt-[10px]">
        <Button
          variant="contained"
          size="small"
          sx={{
            minHeight: 28,
            px: 1,
            py: 0.75,
            borderRadius: "4px",
            backgroundColor: "background.primary",
            fontWeight: "700",
            fontSize: "12.5px",
            width: {
              xs: "80%", // mobile
              sm: "45%", // ≥600px
            },
          }}
          onClick={() => navigate("/menu")}
        >
          <span style={{ marginLeft: "2px" }}>REORDER</span>
        </Button>
      </div>
    </>
  );
};

export default Hero;
