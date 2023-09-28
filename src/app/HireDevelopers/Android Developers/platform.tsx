import React from "react";

const platformInfo = [
  {
    image: "/assets/image/Vector(8).png",
    title: "Open Source",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    image: "/assets/image/team-collaboration-icon 1.png",
    title: "Scope for Innovation",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    image: "/assets/image/team-member-icon 1(1).png",
    title: "Target Multiple Platforms",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    image: "/assets/image/challenge-target-icon 1.png",
    title: "Cost-Platform",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  }
];

export default function Platform() {
  return (
    <>
      <div className="mt-[120px] px-[15px] sm:px-[20px] md:px-[30px] lg:px-[70px]">
        <div className="grid justify-center">
          <p className="text-[14px] text-[#005CFF] font-semibold leading-normal text-center">Development Platform</p>
          <p className="text-[24px] md:text-[28px] lg:text-[33px] text-[#000] font-bold leading-normal text-center max-w-[600px]">What Makes Android A Good Application Development Platform?</p>
        </div>
      </div>
      <div className="mt-10 md:mt-[90px] grid grid-cols-1 md:grid-cols-2 gap-[20px]">
        {platformInfo.map((info, index) => (
          <div key={index} className="bg-[#fff] p-[20px] grid gap-[20px]  mx-auto border-1 shadow-xl rounded-[20px]">
            <div className="flex gap-[20px] items-center">
              <img src={info.image} alt={info.title} />
              <p className="text-text-black text-[14px] font-semibold leading-[18px]">{info.title}</p>
            </div>
            <p className="text-text-black text-[14px] font-normal max-w-[560px] leading-[30px] ">{info.content}</p>
          </div>
        ))}
      </div>
    </>
  )
}
