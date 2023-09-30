import React from "react";
interface TeamMemberProps {
    name: string;
    role: string;
    image: string;
    svg: string;
}
const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, svg }) => (
    <div className="w-[295px] relative h-[328px] border rounded-[19px]">
        <img src={image} className="w-full rounded-t-[19px]" />
        <p className="bg-[#fff] border-2 absolute top-[53px] right-[59px] border-[#fff] flex justify-center items-center  w-[175px] h-[175px] rounded-full p-1">
            <img src={svg} className="w-[166px] rounded-full h-[166px]" alt="ceo" />
        </p>
        <p className="text-[18px] font-medium leading-[33px] flex justify-center items-center mt-[82px]">{name}</p>
        <p className="leading-[33px] font-medium text-[14px] text-center text-[#414141]">{role}</p>
    </div>
);
export default function Ourteam() {
    const teamData = [
        { name: 'Baryden Tengan', role: 'CEO & FOUNDER', svg: './assets/svg/group1.svg', image: './assets/image/round.png' },
        { name: 'Erin Shantel', role: 'COO & FOUNDER', svg: './assets/svg/group2.svg', image: './assets/image/round.png' },
        { name: 'Antonio Gill', role: 'COO & FOUNDER', svg: './assets/svg/group3.svg', image: './assets/image/round.png' },
        { name: 'Francesca', role: 'Designer', svg: './assets/svg/group4.svg', image: './assets/image/round.png' },
    ];
    return (
        <>
            <div className="mt-[100px] text-center">
                <p className="text-[14px] text-[#005CFF] font-semibold leading-normal">Our Team Members</p>
                <p className="text-[24px] md:text-[28px] lg:text-[33px] text-[#000] font-bold leading-normal">Introducing Our Talented Team Members</p>
            </div>
            <div className="flex justify-center mt-5 md:mt-[71px] items-center flex-wrap gap-5 md:gap-[41px]">
                {teamData.map((member, index) => (
                    <TeamMember
                        key={index}
                        name={member.name}
                        role={member.role}
                        svg={member.svg}
                        image={member.image}
                    />
                ))}
            </div>
        </>
    )
}