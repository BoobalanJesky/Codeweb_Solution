import React from "react";
import AccountCard from "../Components/Reusable/Accountcard";
export default function Believe() {
    const accountCardsData = [
        {
            title: "Friendly Atmosphere",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/assets/image/Group 2005.png",
            className: "w-full sm:w-[338px] sm:h-[338px]  px-[24px] mx-auto py-[44px]  grid justify-items-center text-center",
        },
        {
            title: "Vision - Oriented",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/assets/image/Group 2031.svg",
            className: "w-full sm:w-[338px] sm:h-[338px]   px-[24px] mx-auto py-[44px] grid justify-items-center text-center",
        },
        {
            title: "Regular Fun Activities",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/assets/image/Group 2005.png",
            className: "w-full sm:w-[338px] sm:h-[338px]   px-[24px] mx-auto py-[44px] grid justify-items-center text-center",
        }
    ];

    return (
        <>
            <div className="mt-[146px] ">
                    <div className="grid justify-center">
                        <p className="text-[14px] text-[#005CFF] font-semibold leading-normal text-center">Fun At Work</p>
                        <p className="text-[24px] mb-[18px] md:text-[28px] lg:text-[33px] text-[#000] font-bold leading-normal text-center  mx-auto">What We Believe</p>
                    </div>

            </div>
            <div className="mt-10 md:mt-[50px] flex flex-wrap mx-auto gap-[40px]">
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