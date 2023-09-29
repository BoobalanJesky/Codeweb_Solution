import React, { useRef, useState } from "react";
import styles from "../../css/about.module.css";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Journey = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const journey = [
    {
      image:"./assets/image/banner.png",
      subhead: "Case Studies",
      head: "Unlocking Success Story Of AloApp, From Scratch to Finish",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing.",
      button: "Explore AloApp Case Study",
    },
    {
      image:"./assets/image/banner2.png",
      subhead: "Case Studies",
      head: "Want To know About Our Service? Join Us Now!",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing.",
      button: "Explore AloApp Case Study",
    },
    {
      image:"./assets/image/banner.png",
      subhead: "Case Studies",
      head: "Are you looking for any unique set of services?",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing.",
      button: "Explore AloApp Case Study",
    },
    {
      image:"./assets/image/banner2.png",
      subhead: "Case Studies",
      head: "Do You Want To Know More About Our Business?",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing.",
      button: "Explore AloApp Case Study",
    },
    {
      image:"./assets/image/banner.png",
      subhead: "Case Studies",
      head: "Do You Want To Know More Dedicated Developer Services?",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing.",
      button: "Explore AloApp Case Study",
    },
  ]
  const settings = {
    fade:true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const goToNextSlide = () => {
    if (currentSlide === sliderRef.current.props.children.length - 1) {
      setCurrentSlide(0);
      sliderRef.current.slickGoTo(0);
    } else {
      setCurrentSlide(currentSlide + 1);
      sliderRef.current.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(sliderRef.current.props.children.length - 1);
      sliderRef.current.slickGoTo(sliderRef.current.props.children.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
      sliderRef.current.slickPrev();
    }
  };
  return (
    <div className="relative">
      {/*   */}
      <div onClick={goToPrevSlide} className={`rounded-full  ${styles.leftAbs} absolute z-10   border border-[#0F5DC4] h-[50px] w-[50px] flex justify-center items-center  bg-default-primary my-auto`}>
        <img src="./assets/svg/leftArrow.svg" />
      </div>
      <Slider {...settings} ref={sliderRef} initialSlide={currentSlide}>
        {journey.map((i, j) => (
          // eslint-disable-next-line react/jsx-key
          <div className={`w-full   p-2 h-full bg-[#222] lg:h-[520px] flex items-start justify-center  lg:flex-nowrap lg:gap-[70px]  ${styles.journeyPad} lg:px-[72px]`}>

            <div key={j} className="flex justify-center items-center flex-wrap">
              <div className="md:w-1/2">
                <img src={i.image} className="mx-auto w-[300px] md:w-[18.5rem] lg:w-auto py-[50px]" />
              </div>
              <div className="md:w-1/2 mt-20  lg:mt-[49px] my-auto md:mt-[70px]">
                <p className="text-[14px] my-[5px] text-center lg:text-start  leading-normal font-semibold text-text-color">
                  {i.subhead}
                </p>
                <p className="text-[24px] md:text-[30px] lg:text-[33px] text-center lg:text-start font-bold leading-normal text-[#fff] lg:max-w-[500px]">
                  {i.head}
                </p>
                <p className="text-[14px] font-normal leading-[30px] text-[#fff] md:max-w-[518px] mt-[26px] mb-[20px]">
                  {i.para}
                </p>
                <div className="flex justify-center lg:justify-start">
                  <button className="bg-default-primary flex justify-between items-center gap-[7px] text-[#fff] capitalize px-[25px] py-[13px] rounded-[4px] text-[14px] font-medium leading-normal">
                    <span>{i.button}</span>
                    <img
                      src="./assets/svg/keyArrow.svg"
                      className="w-[12px] h-[8px]"
                    ></img>
                  </button></div>
              </div>
            </div>

          </div>))}
      </Slider>
      <div onClick={goToNextSlide} className={`rounded-full absolute ${styles.rightAbs}    border border-[#0F5DC4] h-[50px] w-[50px] flex justify-center items-center  bg-default-primary my-auto`}>
        <img src="./assets/svg/rightArrow.svg" />
      </div>
    </div>
  );
};

export default Journey;