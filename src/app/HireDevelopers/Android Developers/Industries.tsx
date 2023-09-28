import React from "react";
import styles from "../../app/css/about.module.css";
export default function Industries() {
    const header = [
        {
            icon: "/assets/image/14102962671595341166 1.png",
            head: "Healthcare & Fitness"
        },
        {
            icon: "/assets/image/4987286121594941299 1.png",
            head: "Finance & Banking"
        },
        {
            icon: "/assets/image/5575858831595156046 1.png",
            head: "Education & Technology"
        },
        {
            icon: "/assets/image/15706546551638029481 1.png",
            head: "Management Services"
        },
        {
            icon: "/assets/image/2817315341595601896 1.png",
            head: "Logistics & Transportation"
        },
        {
            icon: "/assets/image/online-shopping-icon 1.png",
            head: "E-Commerce"
        },
        {
            icon: "/assets/image/2714854771586786105 1.png",
            head: "Travel & Tourism"
        },
        {
            icon: "/assets/image/microphone-line-icon 1.png",
            head: "Insurance"
        },
    ]
    return (
        <>
            <div className="mt-[100px] text-center">
                <p className="text-[14px] text-[#005CFF] font-semibold leading-normal">Industries</p>
                <p className="text-[24px] md:text-[28px] lg:text-[33px] text-[#000] font-bold leading-normal max-w-[600px] mx-auto">Industries We Serve for Android App Development</p>
            </div>
            <div className={`mt-[70px] ${styles.customCard} grid sm:grid-cols-2  lg:grid-cols-4 gap-y-[30px] gap-[33px]`}>
                {header.map((i, j) => (
                    <div key={j} className="bg-default-white p-[20px] w-[300px] mx-auto border-1 shadow-lg rounded-[20px]">
                        <div className="flex gap-[20px] items-center">
                            <img src={i.icon} alt={i.head} />
                            <p className="text-[#414141] text-[14px] font-semibold leading-[24px]">{i.head}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}