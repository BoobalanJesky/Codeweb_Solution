import React from "react";
export default function Industries() {
    const header = [
        {
            icon:"/assets/image/14102962671595341166 1.png",
            head:"Healthcare & Fitness"
        },
        {
            icon:"/assets/image/4987286121594941299 1.png",
            head:"Finance & Banking"
        },
        {
            icon:"/assets/image/5575858831595156046 1.png",
            head:"Education & Technology"
        },
        {
            icon:"/assets/image/15706546551638029481 1.png",
            head:"Management Services"
        },
        {
            icon:"/assets/image/2817315341595601896 1.png",
            head:"Logistics & Transportation"
        },
        {
            icon:"/assets/image/online-shopping-icon 1.png",
            head:"E-Commerce"
        },
        {
            icon:"/assets/image/2714854771586786105 1.png",
            head:"Travel & Tourism"
        },
        {
            icon:"/assets/image/microphone-line-icon 1.png",
            head:"Insurance"
        },
    ]
    return (
        <>
            <div className="mt-[100px] px-[15px] sm:px-[20px] md:px-[30px] lg:px-[70px]">
                <div className="grid justify-center">
                    <p className="text-[14px] text-[#005CFF] font-semibold leading-normal text-center">Industries</p>
                    <p className="text-[24px] md:text-[28px] lg:text-[33px] text-[#000] font-bold leading-normal text-center max-w-[600px]">Industries We Serve for Android App Development</p></div>
                    </div>
                    <div className="mt-[70px] px-[15px] sm:px-[20px] md:px-[30px] xl:px-[70px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-y-[30px] gap-[33px]">
                {header.map((i, j) => (
                    <div key={j} className="">
                        <div className="bg-[#fff] p-[20px]  mx-auto border-1 shadow-xl rounded-[20px]">
                            <div className="flex gap-[20px] items-center">
                                <img src={i.icon} />
                                <p className="text-[#414141] text-[14px] font-semibold leading-[24px]">{i.head}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}