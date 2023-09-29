import React from "react";
export default function Ourteam() {

    const image = [
        // "./assets/image/ceo.png",
        // "./assets/image/designer.png",
        // "./assets/image/coo.png",
        // "./assets/image/cooo.png",
        {
            src: "./assets/image/Mask group(3).png"
        },
    ];
    return (
        <>
            <div className="mt-[100px] text-center">
                <p className="text-[14px] text-[#005CFF] font-semibold leading-normal">Our Team Members</p>
                <p className="text-[24px] md:text-[28px] lg:text-[33px] text-[#000] font-bold leading-normal">Introducing Our Talented Team Members</p>
            </div>

            <div className="flex justify-center items-center flex-wrap gap-5 md:gap-[41px]">
                {/* {image.map((i, index) => (
                    <div key={index} className="bg-[#fff] border-2 rounded-full p-1">
                        <img src={i.src} className=""/>
                        </div>
                ))} */}
                <div className="w-[295px] relative h-[328px] border rounded-[19px]">
                    <img src="./assets/image/round.png" className="w-full rounded-t-[19px]" />
                    <p className="bg-[#fff] border-2 absolute top-[53px] right-[59px] border-[#fff] flex justify-center items-center  w-[175px] h-[175px] rounded-full p-1">
                        <img src="./assets/svg/group1.svg" className="w-[166px] rounded-full h-[166px]" alt="ceo" />
                    </p>
                    <p className="text-[18px] font-medium leading-[33px] flex justify-center items-center mt-[82px]">Baryden Tengan</p>
                    <p className="leading-[33px] font-medium text-[14px] text-center text-[#414141]">CEO & FOUNDER</p>
                </div>
                <div className="w-[295px] relative h-[328px] border rounded-[19px]">
                    <img src="./assets/image/round.png" className="w-full rounded-t-[19px]" />
                    <p className="bg-[#fff] border-2 absolute top-[53px] right-[59px] border-[#fff] flex justify-center items-center  w-[175px] h-[175px] rounded-full p-1">
                        <img src="./assets/svg/group2.svg" className="w-[166px] rounded-full h-[166px]" alt="ceo" />
                    </p>
                    <p className="text-[18px] font-medium leading-[33px] flex justify-center items-center mt-[82px]">Erin Shantel</p>
                    <p className="leading-[33px] font-medium text-[14px] text-center text-[#414141]">COO & FOUNDER</p>
                </div>
                <div className="w-[295px] relative h-[328px] border rounded-[19px]">
                    <img src="./assets/image/round.png" className="w-full rounded-t-[19px]" />
                    <p className="bg-[#fff] border-2 absolute top-[53px] right-[59px] border-[#fff] flex justify-center items-center  w-[175px] h-[175px] rounded-full p-1">
                        <img src="./assets/svg/group3.svg" className="w-[166px] rounded-full h-[166px]" alt="ceo" />
                    </p>
                    <p className="text-[18px] font-medium leading-[33px] flex justify-center items-center mt-[82px]">Antonio Gill</p>
                    <p className="leading-[33px] font-medium text-[14px] text-center text-[#414141]">COO & FOUNDER</p>
                </div>
                <div className="w-[295px] relative h-[328px] border rounded-[19px]">
                    <img src="./assets/image/round.png" className="w-full rounded-t-[19px]" />
                    <p className="bg-[#fff] border-2 absolute top-[53px] right-[59px] border-[#fff] flex justify-center items-center  w-[175px] h-[175px] rounded-full p-1">
                        <img src="./assets/svg/group4.svg" className="w-[166px] rounded-full h-[166px]" alt="ceo" />
                    </p>
                    <p className="text-[18px] font-medium leading-[33px] flex justify-center items-center mt-[82px]">Francesca</p>
                    <p className="leading-[33px] font-medium text-[14px] text-center text-[#414141]">Designer</p>
                </div>
            </div>
        </>
    )
}