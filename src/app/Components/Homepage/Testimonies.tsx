import React from "react";
import styles from "../../css/about.module.css";
const Testimonies = () => {
    return (
        <div>
            <div>
                <p className="text-[14px] mt-[100px] my-[5px] text-center leading-normal font-semibold text-text-color">
                    Client Reviews
                </p>
                <p className="text-[33px] font-bold flex justify-center leading-normal mt-[5px] mb-10 md:mb-[70px] text-[#222] ">
                    Testimonials From Our Beloved Clients
                </p>
            </div>
            <section className="md:flex items-center mb-10 md:mb-[110px] relative">
            <div className="md:w-1/2 mx-auto">
<img src="/assets/image/banner2.png " className="mx-auto"/>
        </div>
                <div className="md:w-1/2 grid gap-[20px] ">
                    <div>
                        <p className="text-[33px] font-bold text-center md:text-start leading-normal text-text-black md:max-w-[476px]">
                            Excellent Service & Commitment
                        </p>
                        <p className="text-[14px] font-normal  leading-[30px] text-[#414141] md:max-w-[520px] mt-[26px] mb-[20px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever. Lorem Ipsum
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever.
                        </p>
                        <p className="text-[14px] font-bold leading-[30px] text-[#414141]">- Madhavan</p>
                        <div className="flex justify-center md:justify-start gap-[20px] mt-[20px]">
                            <div className="rounded-full px-[19px] py-[15px] bg-default-primary my-auto">
                                <img src="/assets/svg/leftArrow.svg" />
                            </div>
                            <div className="rounded-full px-[19px] py-[15px] bg-default-primary my-auto">
                                <img src="/assets/svg/rightArrow.svg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.boxShading} absolute border border-solid  bg-opacity-30 w-80 h-80 rounded-full top-[-306px] left-[-397px]`}></div>
            </section>
        </div>
    );
};

export default Testimonies;
