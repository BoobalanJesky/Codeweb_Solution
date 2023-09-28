"use client"
import React, { useState } from 'react';
import MyAccordion from "./Accordion";

export default function Faq() {
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <>
            <div className="mt-10  md:mt-[100px] text-center">
                <p className="text-[14px] text-[#005CFF] font-semibold leading-normal">FAQ</p>
                <p className="text-[28px] md:text-[30px] lg:text-[35px] text-[#000] font-bold leading-normal mx-auto">Frequently Asked Questions</p>
            </div>
            <div className='md:mt-[40px]'>
                {[1, 2, 3, 4, 5].map((panel, index) => (
                    <MyAccordion
                        key={index}
                        title={`Lorem Ipsum is simply dummy text of the printing and typesetting industry`}
                        content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`}
                        expanded={expanded === `panel${panel}`}
                        onChange={handleChange(`panel${panel}`)}
                        sx={{  
                            backgroundColor: "#fff",
                            paddingTop: '30px',
                            paddingBottom:"30px",
                            borderBottom:"0.5px solid #005cff"
                            // borderBottom:"2px"
                          }}
                            titleSx={{
                                fontSize: '14px',
                                '@media (min-width:600px)': {
                                  fontSize: '18px',
                                  lineHeight: '18px',
                                },
                                fontWeight: '600',
                                color: '#222',
                                paddingTop: '30px',
                              }}
                              addSx={{
                                color:"#005cff"
                              }}
                              removeSx={{
                                color:"#005cff"
                              }}
                          contentSx={{
                            color: '#222',
                          }}
                    />
                ))}
            </div>
        </>
    );
}
