import React from "react";
export default function Ourteam() {
 
    const image = [
        // "./assets/image/ceo.png",
        // "./assets/image/designer.png",
        // "./assets/image/coo.png",
        // "./assets/image/cooo.png",
        {src:"./assets/image/Mask group(3).png"
    },
    ];
    return (
        <>
            <div className="mt-[100px] text-center">
                <p className="text-[14px] text-[#005CFF] font-semibold leading-normal">Our Team Members</p>
                <p className="text-[24px] md:text-[28px] lg:text-[33px] text-[#000] font-bold leading-normal">Introducing Our Talented Team Members</p>
            </div>

            <div className="grid sm:grid-cols-2 justify-items-center lg:grid-cols-4 md:gap-[41px]">
                {image.map((i, index) => (
                    <div key={index} className="bg-[#fff] border shadow-md">
                        <img src={i.src} className=""/>
                        </div>
                ))}
            </div>
        </>
    )
}