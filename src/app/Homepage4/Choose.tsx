import React from "react";
import AccountCard from "../Components/Reusable/Accountcard";
import styles from "../../app/css/about.module.css";
export default function Choose() {
    const cardData = [
        {
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/assets/image/Group 2005.png",
            className: "w-full sm:w-[338px] h-[338px] px-[25px] text-[13px] mx-auto py-[54px] grid justify-items-center text-center",
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/assets/image/Group 2031.svg",
            className: "w-full sm:w-[338px] h-[338px] px-[25px] text-[13px] mx-auto py-[54px] grid justify-items-center text-center",
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/assets/image/Group 2005.png",
            className: "w-full sm:w-[338px] h-[338px] px-[25px] text-[13px]  mx-auto py-[54px] grid justify-items-center text-center",
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/assets/image/Group 2031.svg",
            className: "w-full sm:w-[338px] h-[338px] px-[25px] text-[13px] mx-auto py-[54px] grid justify-items-center text-center",
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/assets/image/Group 2005.png",
            className: "w-full sm:w-[338px] h-[338px] px-[25px] text-[13px] mx-auto py-[54px] grid justify-items-center text-center",
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/assets/image/Group 2031.svg",
            className: "w-full sm:w-[338px] h-[338px] px-[25px] text-[13px] mx-auto py-[54px] grid justify-items-center text-center",
        },
    ];
    return (
        <>
            <div className=" mt-10 md:mt-[107px] ">
                <div className="md:flex md:justify-between lg:px-[50px]">
                    <div className="hidden md:block"><img src="/assets/image/Frame(1).png" /></div>
                    <div className="">
                        <p className="text-[14px] text-[#005CFF] font-semibold leading-normal text-center">Why Choose Us?</p>
                        <p className="text-[24px] mb-[18px] mt-[] md:text-[28px] lg:text-[33px] max-w-[535px] text-[#000] font-bold leading-normal text-center  mx-auto">Why Clients Choose Our Website
                            Development Services?</p>
                    </div>
                    <div className="hidden md:block"><img src="/assets/image/Polygon 1.png" /></div>
                </div>

            </div>
            <div className={`mt-[40px] grid sm:grid-cols-2 gap-y-5  lg:grid-cols-3  mx-auto lg:gap-y-[50px] ${styles.customChoose}`}>
                {cardData.map((card, index) => (
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