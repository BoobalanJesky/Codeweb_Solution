"use client"
import React, { useState } from 'react';
import MyAccordion from "@abserve/app/ContactUs/Accordion";
export default function Topquality() {
    const [expanded, setExpanded] = useState(null);
    const accordionData = [
        {
            title: "Efficient and Productive Workforce",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            title: "24/7 Operations",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            title: "Transparency",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            title: "Is Hiring Developers From CWS Is Economical?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            title: "Adhere to Global Standards",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
    ];
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };
    return (
        <>
            <div className="mt-[100px] w-full flex p-5 lg:p-[70px] gap-4 lg:gap-0 items-center flex-wrap md:flex-nowrap  bg-default-black">
                <div className="md:w-1/2">
                    <p className="font-semibold text-[14px] text-text-color leading-normal">Top Quality</p>
                    <p className="font-bold text-text-white my-[10px]  text-[24px] md:text-[30px] lg:text-[33px] md:max-w-[550px] leading-normal">Is it reasonable to Hire Developers From Code Web Solutions?</p>
                    <p className="text-[14px] text-text-white md:max-w-[590px] leading-[30px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className="md:w-1/2">
                    <div className='bg-default-black rounded-[20px] px-[20px]  mx-auto'>
                    {accordionData.map((item, index) => (
    <MyAccordion
        key={index}
        title={item.title}
        content={item.content}
        expanded={expanded === `panel${index + 1}`}
        onChange={handleChange(`panel${index + 1}`)}
        sx={{
            border:"0.5px solid #fff",
            backgroundColor: "#222222",
          }}
          titleSx={{
            color:"#fff"
          }}
          contentSx={{
            fontSize: '14px',
            '@media (min-width: 768px)': {
              fontSize: '14x',
              lineHeight: '30px',
            },
            fontWeight: 'bold',
            color: '#fff',
            paddingTop: '20px',
            paddingLeft: '20px',
          }}
          addSx={{
            color:"#fff"
          }}
          removeSx={{
            color:"#fff"
          }}
    />
))}

                    </div>
                </div>
            </div>
        </>
    )
}