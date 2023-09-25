import React from "react";

const achievementData = [
  { number: "1.2K", description: "Dedicated Projects" },
  { number: "4+", description: "Years Of Experience" },
  { number: "1K+", description: "Trusted Clients" },
  { number: "100+", description: "Team Members" },
];

export default function Achievements() {
  return (
    <>
      <div className="grid grid-cols-1 gap-[175px] gap-y-10 sm:grid-cols-2 lg:grid-cols-4 mt-[40px] sm:mt-[90px] lg:mt-[126px]">
        {achievementData.map((achievement, index) => (
          <div key={index} className="text-center">
            <p className="text-[#005CFF] font-bold text-[35px] leading-[52.5px]">
              {achievement.number}
            </p>
            <p className="font-medium text-[18px] leading-[27px] text-[#000000]">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
