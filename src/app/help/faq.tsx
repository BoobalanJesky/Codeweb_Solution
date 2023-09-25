"use client"
import React, { useState } from 'react';
import MyAccordion from "./Accordion";
import styles from "../../css/stepper.module.css";
export default function Faq() {
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : null);
    };
    return (
        <>
            <div className=" mt-10 md:mt-[100px]">
                    <div className="grid justify-center">
                        <p className="text-[14px] text-[#005CFF] font-semibold leading-normal text-center">FAQ</p>
                        <p className="text-[28px]  md:text-[30px] lg:text-[35px] text-[#000] font-bold leading-normal text-center mx-auto">Frequently Asked Questions</p>
                    </div>
                </div>
                <div className='md:mt-[110px]'>
                <MyAccordion title="Lorem Ipsum is simply dummy text of the printing and typesetting industry" 
                         content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
                         expanded={expanded === 'panel1'}
                         onChange={handleChange('panel1')}/>
                        <MyAccordion title="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                         content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
                         expanded={expanded === 'panel2'}
                         onChange={handleChange('panel2')}/>
                        <MyAccordion title="Lorem Ipsum is simply dummy text of the printing and typesetting industry" 
                         content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
                         expanded={expanded === 'panel3'}
                         onChange={handleChange('panel3')}/>
                        <MyAccordion title="Lorem Ipsum is simply dummy text of the printing and typesetting industry" 
                         content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
                         expanded={expanded === 'panel4'}
                         onChange={handleChange('panel4')}/>
                        <MyAccordion title="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                         content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
                         expanded={expanded === 'panel5'}
                         onChange={handleChange('panel5')}/>
                </div>
            </>
    )
}