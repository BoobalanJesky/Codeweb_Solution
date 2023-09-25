"use client"
import React, { useState } from 'react';
import MyAccordion from "../help/Accordion";
export default function Topquality() {
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : null);
    };
    return (
        <>
            <div className="mt-[100px] grid grid-cols-1 lg:grid-cols-2 bg-[#1E1E1E]">
                <div className="my-auto px-[20px] lg:pl-[104px] pt-[20px] md:block">
                    <p className="font-semibold text-[14px] text-[#005CFF] leading-normal">Top Quality</p>
                    <p className="font-bold text-[#FFF] pt-5 text-[24px] md:text-[30px] lg:text-[33px] md:max-w-[550px] leading-normal">Is it reasonable to Hire Developers From Code Web Solutions?</p>
                    <p className="text-[14px] text-[#fff] md:max-w-[590px] leading-[30px] pt-[20px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className="py-[90px] px-[20px]">
                    <div className='bg-[#1E1E1E] rounded-[20px] border-[#fff] border-2 px-[20px] mx-auto '>
                        <MyAccordion title="Efficient and Productive Workforce" 
                         content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
                         expanded={expanded === 'panel1'}
                         onChange={handleChange('panel1')}/>
                        <MyAccordion title="24/7 Operations"
                         content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
                         expanded={expanded === 'panel2'}
                         onChange={handleChange('panel2')}/>
                        <MyAccordion title="Transparency" 
                         content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
                         expanded={expanded === 'panel3'}
                         onChange={handleChange('panel3')}/>
                        <MyAccordion title="Is Hiring Developers From CWS Is Economical?" 
                         content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
                         expanded={expanded === 'panel4'}
                         onChange={handleChange('panel4')}/>
                        <MyAccordion title="Adhere to Global Standards"
                         content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
                         expanded={expanded === 'panel5'}
                         onChange={handleChange('panel5')}/>
                    </div>
                </div>
            </div>
        </>
    )
}