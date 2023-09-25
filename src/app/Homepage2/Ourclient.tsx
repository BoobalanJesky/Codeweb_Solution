import React from "react";
import AccountCard from "../Components/Reusable/Accountcard";
export default function Ourclient() {
    const accountCardsData = [
        {
            title: "Market Analysis",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/assets/image/Group 2005.png",
            className: "w-[290px] md:w-[307px] px-[17px] py-[25px] mx-auto grid justify-items-center text-center",
        },
        {
            title: "Experienced Team",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/assets/image/Group 2031.svg",
            className: "w-[290px] md:w-[307px] px-[17px] mx-auto py-[25px] grid justify-items-center text-center",
        },
        {
            title: "Business Growth",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/assets/image/Group 2005.png",
            className: "w-[290px] md:w-[307px] px-[17px] mx-auto py-[25px] grid justify-items-center text-center",
        }
    ];

    return (
        <>
            <div className="mt-[107px] ">
                <div className="md:flex md:justify-between lg:px-[50px]">
                    <div className="hidden md:block"><img src="/assets/image/Frame(1).png" /></div>
                    <div className="">
                        <p className="text-[14px] text-[#005CFF] font-semibold leading-normal text-center">Our Mission & Value</p>
                        <p className="text-[24px] mb-[18px] mt-[] md:text-[28px] lg:text-[33px] text-[#000] font-bold leading-normal text-center  mx-auto">Why Our Client Mostly Time Working With Us</p>
                        <p className="text-[14px]  text-[#414141] font-normal leading-normal text-center max-w-[537px] mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className="hidden md:block"><img src="/assets/image/Polygon 1.png" /></div>
                </div>

            </div>
            <div className="mt-10 md:mt-[91px] flex flex-wrap mx-auto gap-[40px]">
                {accountCardsData.map((card, index) => (
                    <AccountCard
                        key={index}
                        title={card.title}
                        description={card.description}
                        icon={card.icon}
                        className={card.className}
                    />
                ))}
            </div>
        </>
    )
}