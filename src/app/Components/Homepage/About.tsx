"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../../css/about.module.css";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./CustomSlider.css"; 
const About = () => {
  const [activeDot, setActiveDot] = useState(0);
  const handleDotClick = (index) => {
    setActiveDot(index);
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <ul className="custom-dots">
        {dots.slice(0, 8)}
      </ul>
    )

  };
  const header = [
    {
      pageHead: "",
      headText: "Website & Mobile Application",
      head: "Development Company",
      button: "Explore our services",
      img: "/assets/svg/keyArrow.svg",
      bannerImage: "/assets/image/banner.png"
    },
    {
      pageHead: "About Us",
      headText: "",
      head: "A Canvas for Passionate Creators: Nurturing Enthusiasm & Creativity",
      button: "Get Started",
      img: "",
      bannerImage: "/assets/image/bannerImage2.png"
    },
    {
      pageHead: "Services",
      headText: "",
      head: "Code Web Solutions: The Future of Web & Mobile Technologies",
      button: "Get Started",
      img: "",
      bannerImage: "/assets/image/bannerImage2.png"
    },
    {
      pageHead: "Website Development Services",
      headText: "",
      head: "The Best Website Development Services for Your Business",
      button: "Get Started",
      img: "",
      bannerImage: "/assets/image/bannerImage2.png"
    },
    {
      pageHead: "Hire Developers",
      headText: "",
      head: "Hire Our Expert Developers For Your Projects",
      button: "Get Started",
      img: "",
      bannerImage: "/assets/image/bannerImage2.png"
    },
    {
      pageHead: "Android Developers",
      headText: "",
      head: "Hire Our Expert Android Developers ForYour Projects",
      button: "Send Query",
      img: "",
      bannerImage: "/assets/image/bannerImage2.png"
    },
    {
      pageHead: "Careers",
      headText: "",
      head: "We’re Re-defining Work at Code Web Solutions",
      button: "Explore Vacancies",
      img: "",
      bannerImage: "/assets/image/bannerImage2.png"
    },
  ]
  
  return (
    <div className="mb-[124px]">
      <Slider {...settings} >
        {header.map((i, j) => (
          <div key={j} className="custom-slide" >
            <div className={`${styles.AboutItem} w-full flex justify-center  flex-wrap lg:flex-nowrap lg:gap-[190px] px-[5px]`}>
              <div className="grid md:w-1/2 m-auto">
                <p className="font-bold lg:pt-[60px] mt-[7px] text-center   md:text-start text-[35px] md:max-w-[545px]">
                  <span className="text-text-color block text-[14px] font-semibold leading-normal">{i.pageHead}</span>
                  <span className="text-text-color">{i.headText} </span>
                  <span className="">{i.head} </span>
                </p>
                <p className="sm:max-w-[530px]  mx-auto md:mx-0 flex justify-center text-[14px] mt-[27px] mb-[20px] md:mb-[51px] leading-normal font-normal">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s
                </p>

                <div className="flex mb-8 md:mb-0 justify-center md:justify-start gap-[11px]">
                  <button className="bg-default-primary flex justify-between items-center gap-[7px] text-[#fff] capitalize px-[25px] py-[13px] rounded-[4px] text-[14px] font-medium leading-normal">
                    <span>{i.button}</span>
                    <img
                      src={i.img}
                      className="w-[12px] h-[8px]"
                    ></img>
                  </button>
                  {j === 0 && (
                    <div className="rounded-full border border-default-primary flex justify-between px-[21px] py-[14px] bg-default-primary">
                      <img src="/assets/svg/arrow.svg" alt="arrow" />
                    </div>
                  )}
                </div>
              </div>

              <div className="md:w-1/2">
                <img src={i.bannerImage} className="mx-auto lg:mx-0" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default About;
