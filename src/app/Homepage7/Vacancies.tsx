import React from "react";
export default function Vacancies() {
    const header = [
        {
            head: "Android Developer",
            para: "Experience: 2 - 4 years",
            para2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            head: "iOS Developer",
            para: "Experience: 2 - 4 years",
            para2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            head: "Php Developer",
            para: "Experience: 2 - 4 years",
            para2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            head: "Magento Developer",
            para: "Experience: 2 - 4 years",
            para2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            head: "Digital Marketer",
            para: "Experience: 2 - 4 years",
            para2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            head: "Graphic Designer",
            para: "Experience: 2 - 4 years",
            para2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
    ]
    return (
        <>
            <div className="mt-[100px]">
                <div className="grid justify-center">
                    <p className="text-[14px] text-[#005CFF] font-semibold leading-normal text-center">Vacancies</p>
                    <p className="text-[24px] md:text-[28px] lg:text-[33px] text-[#000] font-bold leading-normal text-center max-w-[600px]">Available Positions</p>
                </div>
            </div>
            <div className="mt-[90px] grid  sm:grid-cols-2 gap-[20px] gap-y-[40px]">
                {header.map((i, j) => (
                    <div key={j} className="">
                        <div className="bg-[#fff] grid gap-[20px] p-[20px]  mx-auto border-1 shadow-lg rounded-[20px]">
                            <p className="text-text-gray text-[14px] font-semibold leading-[18px]">{i.head}</p>
                            <p className="text-text-gray text-[14px] grid  gap-[20px] font-normal leading-[30px] "><span>{i.para}</span>
                            <span>{i.para2}</span></p>
                            <button className="text-[#fff] w-[140px] h-[47px] text-[14px] font-medium leading-normal bg-[#005CFF] rounded-[4px] mt-[20px] px-[25px] py-[13px]">Explore More</button>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}