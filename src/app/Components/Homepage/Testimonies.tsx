"use client"
import React, { useRef, useState } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonies = () => {
    const sliderRef = useRef(null); 
    const testimony = [{
        subHead: "Client Reviews",
        head: "Testimonials From Our Beloved Clients",
        mainHead: "Excellent Service & Commitment",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        name: "Madhavan",
        img: "/assets/svg/fam.svg "
    },
    {
        subHead: "Client Reviews",
        head: "Testimonials About Our Website Development Services",
        mainHead: "Excellent Service & Commitment",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        name: "Madhavan",
        img: "/assets/svg/fam.svg "
    },
    {
        subHead: "Client Reviews",
        head: "Testimonials About Our Website Development Services",
        mainHead: "Excellent Service & Commitment",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        name: "Madhavan",
        img: "/assets/svg/fam.svg "
    },

    ]
    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNextSlide = () => {
        sliderRef.current.slickNext();
    };
    
    const goToPrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className="grid grid-cols-1 mx-auto mt-[100px] relative testimonial">
            <Slider {...settings} ref={sliderRef} initialSlide={currentSlide}>
                {testimony.map((i, j) => (
                        <div key={j} className="custom-slide ">
                            <div className="grid justify-center">
                                <p className="text-[14px]  my-[5px] text-center leading-normal font-semibold text-text-color">
                                    {i.subHead}
                                </p>
                                <p className="text-[24px] md:text-[28px] lg:text-[33px] font-bold max-w-[623px] text-center flex justify-center leading-normal mt-[5px] text-[#222] ">
                                    {i.head}
                                </p>

                            </div>
                            <section className="md:flex custom-slide items-center mb-10 md:mb-[110px]  mt-10 md:mt-[70px] relative">
                                <div className="md:w-1/2 mx-auto">
                                    <div>
                                        <img src={i.img} className="mx-auto w-96" />
                                    </div>
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

                                </div>

                            </section>
                     
                        <div className="flex absolute bottom-0 right-0 justify-center md:justify-start gap-[20px] mt-[20px]">
                            <div onClick={goToPrevSlide} className="rounded-full  px-[19px] py-[15px] bg-default-primary my-auto">
                                <img src="/assets/svg/leftArrow.svg" />
                            </div>
                            <div onClick={goToNextSlide} className="rounded-full  px-[19px] py-[15px] bg-default-primary my-auto">
                                <img src="/assets/svg/rightArrow.svg" />
                            </div>
                        </div>
                        </div>
                ))}
            </Slider>

        </div>
    );
};

export default Testimonies;