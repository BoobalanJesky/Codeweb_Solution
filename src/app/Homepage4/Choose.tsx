import React from "react";
import AccountCard from "../Components/Reusable/Accountcard";
export default function Choose() {
    return (
        <>
            <div className="mt-[107px] px-[15px] sm:px-[20px] md:px-[30px] lg:px-[70px]">
                <div className="grid justify-center">
                    <p className="text-[14px] text-[#005CFF] font-semibold leading-normal text-center">Why Choose Us?</p></div>
                <div className="flex justify-between">
                    <div className="hidden md:block"><img src="/assets/image/Frame(1).png" /></div>
                    <div className="grid justify-center">
                        <p className="text-[24px] md:text-[28px] lg:text-[33px] text-[#000] font-bold leading-normal text-center max-w-[600px]">Why Clients Choose Our Website
                            Development Services?</p></div>
                    <div className="hidden md:block"><img src="/assets/image/Polygon 1.png" /></div>
                </div>
            </div>
            <div className="mt-[40px] flex flex-wrap justify-around gap-[30px] px-[20px] lg:px-[113px]">
                <AccountCard
                    title="Market Analysis"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    icon="/assets/image/Group 2005.png"
                    className=" w-[290px] md:w-[338px] px-[25px] py-[54px] grid justify-items-center text-center"
                />
                <AccountCard
                    title="Experienced Team"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    icon="/assets/image/Group 2031.svg"
                    className="w-[290px] md:w-[338px] px-[25px] py-[54px] grid justify-items-center text-center"
                />
                <AccountCard
                    title="Business Growth"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    icon="/assets/image/Group 2005.png"
                    className="w-[290px] md:w-[338px] px-[25px] py-[54px] grid justify-items-center text-center"
                />
                <AccountCard
                    title="Market Analysis"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    icon="/assets/image/Group 2005.png"
                    className="mt-[50px] w-[290px] md:w-[338px] px-[25px] py-[54px] grid justify-items-center text-center"
                />
                <AccountCard
                    title="Experienced Team"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    icon="/assets/image/Group 2031.svg"
                    className="mt-[50px] w-[290px] md:w-[338px] px-[25px] py-[54px] grid justify-items-center text-center"
                />
                <AccountCard
                    title="Business Growth"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    icon="/assets/image/Group 2005.png"
                    className=" mt-[50px] w-[290px] md:w-[338px] px-[25px] py-[54px] grid justify-items-center text-center"
                />
            </div>
        </>
    )
}
