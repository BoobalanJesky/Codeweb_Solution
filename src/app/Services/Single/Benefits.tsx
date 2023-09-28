"use client"
import React, { useEffect, useState } from "react";
export default function Benefits() {
    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setExpanded(true);
            } else {
                setExpanded(false);
            }
        };
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <div className="w-full flex mt-10 md:mt-[150px] flex-wrap md:flex-nowrap items-center">
                <div className="md:w-1/2 ">
                    <div className="">
                        <img className="" src="./assets/image/Group 2024.png" />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <p className="text-[14px] text-[#005CFF] font-semibold leading-normal">Benefits</p>
                    <p className="text-[28px] md:text-[30px] pt-5 lg:text-[35px] text-[#000] max-w-[555px] font-bold leading-normal">
                        We Provide The Best Benefits For Our Clients
                    </p>
                    <p
                        className={`text-[#414141] text-[14px] font-normal leading-[33px] md:max-w-[600px] ${expanded ? 'max-h-none' : 'max-h-[66px] overflow-hidden'
                            }`}
                    >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the industry&#39s standard dummy text ever since the 1500s. Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39s
                        standard dummy text ever since the 1500s
                        <br />
                        <br />
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the industry&#39s standard dummy text ever since the 1500s. Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39s
                        standard dummy text ever since the 1500s</p>
                    {!expanded ? (
                        <button onClick={() => setExpanded(true)} className="text-text-color cursor-pointer font-normal underline text-xs ">
                            Show More
                        </button>
                    ) : (
                        <button onClick={() => setExpanded(false)} className="text-text-color underline cursor-pointer font-normal text-xs">
                            Show Less
                        </button>
                    )}

                </div>
            </div>
        </>
    )
}