import React from "react";
export default function Chooseus() {
    const header = [
        {
            icon: "/assets/image/team-member-icon 1(1).png",
            head: "Expert Developers",
            para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
        },
        {
            icon: "/assets/image/lamp-icon 1.png",
            head: "Creativity & Innovation",
            para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
        },
        {
            icon: "/assets/image/shield-lock-black-icon 1.png",
            head: "100% Security",
            para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
        },
        {
            icon: "/assets/image/round-hours-icon 1.png",
            head: "24-hour Support",
            para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
        },
        {
            icon: "/assets/image/male-services-support-icon 1.png",
            head: "Free Consultation",
            para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
        },
        {
            icon: "/assets/image/apple-app-store-icon 1.png",
            head: "Free App Submission",
            para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
        },
        {
            icon: "/assets/image/bug-icon 1.png",
            head: "Free 6-months bug support",
            para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
        },
        {
            icon: "/assets/image/remove-male-user-icon 1.png",
            head: "Support after App Rejection",
            para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
        },
        {
            icon: "/assets/image/remove-male-user-icon 1.png",
            head: "Support after App Rejection",
            para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
        },
    ]
    return (
        <>
            <div className="mt-[166px] px-[15px] sm:px-[20px] md:px-[30px] lg:px-[70px]">
                <div className="grid justify-center">
                    <p className="text-[14px] text-[#005CFF] font-semibold leading-normal text-center">Why Choose Us?</p>
                    <p className="text-[24px] md:text-[28px] lg:text-[33px] text-[#000] font-bold leading-normal text-center max-w-[600px]">Why Clients Choose Our Android Developers?</p></div>
                    </div>
                    <div className="mt-[90px] px-[15px] sm:px-[20px] md:px-[30px] xl:px-[70px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-[50px] gap-[20px]">
                {header.map((i, j) => (
                    <div key={j} className="">
                        <div className="bg-[#fff] p-[20px] xl:w-[420px] mx-auto border-1 shadow-xl rounded-[20px]">
                            <div className="flex gap-[20px] items-center">
                                <img src={i.icon} />
                                <p className="text-[#414141] text-[14px] font-semibold leading-[18px]">{i.head}</p>
                            </div>
                            <p className="text-[#414141] pt-[20px] text-[14px] font-normal leading-[30px] ">{i.para}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}