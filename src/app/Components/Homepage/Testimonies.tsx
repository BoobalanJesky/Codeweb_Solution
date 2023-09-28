"use client"
import React, { useRef, useState } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonies = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);
    const testimony = [{
        subHead: "Client Reviews",
        head: "Testimonials From Our Beloved Clients",
        mainHead: "Excellent Service & Commitment",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        name: "Madhavan",
        img: "/assets/image/banner2.png "
    },
    {
        subHead: "Client Reviews",
        head: "Testimonials About Our Website Development Services",
        mainHead: "Excellent Service & Commitment",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        name: "Madhavan",
        img: "/assets/image/banner2.png "
    },
    {
        subHead: "Client Reviews",
        head: "Testimonials About Our Website Development Services",
        mainHead: "Excellent Service & Commitment",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        name: "Madhavan",
        img: "/assets/image/banner2.png "
    },

    ]
    const settings = {
        dots: true,
        // fade: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const goToNextSlide = () => {
        if (currentSlide === sliderRef.current.props.children.length - 1) {
            // If at the last slide, reset to the first slide
            setCurrentSlide(0);
            sliderRef.current.slickGoTo(0);
        } else {
            setCurrentSlide(currentSlide + 1);
            sliderRef.current.slickNext();
        }
    };

    const goToPrevSlide = () => {
        if (currentSlide === 0) {
            // If at the first slide, go to the last slide
            setCurrentSlide(sliderRef.current.props.children.length - 1);
            sliderRef.current.slickGoTo(sliderRef.current.props.children.length - 1);
        } else {
            setCurrentSlide(currentSlide - 1);
            sliderRef.current.slickPrev();
        }
    };
    return (
        <div className="grid grid-cols-1 mx-auto">
            <Slider {...settings} ref={sliderRef} initialSlide={currentSlide}>
                {testimony.map((i, j) => (
                    <div key={j} className="custom-slide ">
                        <div className="grid justify-center">
                            <p className="text-[14px] mt-[100px] my-[5px] text-center leading-normal font-semibold text-text-color">
                                {i.subHead}
                            </p>
                            <p className="text-[24px] md:text-[28px] lg:text-[33px] font-bold max-w-[623px] text-center flex justify-center leading-normal mt-[5px] mb-10 md:mb-[70px] text-[#222] ">
                                {i.head}
                            </p>

                        </div>
                        <section className="md:flex custom-slide items-center mb-10 md:mb-[110px] relative">
                            <div className="md:w-1/2 mx-auto">
                                <img src={i.img} className="mx-auto" />
                            </div>
                            <div className="md:w-1/2 relative grid gap-[20px] ">
                                <div>
                                    <p className="text-[24px] md:text-[30px] lg:text-[33px] font-bold text-center md:text-start leading-normal text-text-black md:max-w-[476px]">
                                        {i.mainHead}
                                    </p>
                                    <p className="text-[14px] font-normal  leading-[30px] text-[#414141] md:max-w-[520px] mt-[26px] mb-[20px]">
                                        {i.para}
                                    </p>
                                    <img className="absolute top-[48%] right-[10%]" src="/assets/image/cottation.png" />
                                    <p className="text-[14px] font-bold leading-[30px] text-[#414141]">{i.name}</p>
                                </div>
                                <div className="flex justify-center md:justify-start gap-[20px] mt-[20px]">
                                    <div onClick={goToPrevSlide} className="rounded-full px-[19px] py-[15px] bg-default-primary my-auto">
                                        <img src="/assets/svg/leftArrow.svg" />
                                    </div>
                                    <div onClick={goToNextSlide} className="rounded-full px-[19px] py-[15px] bg-default-primary my-auto">
                                        <img src="/assets/svg/rightArrow.svg" />
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                ))}
            </Slider>

        </div>
    );
};

export default Testimonies;