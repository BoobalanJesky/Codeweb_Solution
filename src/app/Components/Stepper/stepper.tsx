"use client"
import React, { useState } from 'react';
import styles from "../../css/stepper.module.css";

const Stepper = () => {
    const [activeSteps, setActiveSteps] = useState([1]);
    const steps = [{ year: 2020, start: "Startup Company Founded" },
    { year: 2021, start: "Create Professional Teams" },
    { year: 2022, start: "700+ Successful projects Completed" },
    { year: 2023, start: "Winning Best Company Awards" },
    ];

    const handleStepClick = (index) => {
        setActiveSteps([...Array(index + 1).keys()].map(i => i + 1));
    }

    return (
        <section className={`${styles.verticalStepper} flex  gap-[90px] flex-col items-start`}>
            {steps.map((step, i) => (
                <div key={i} className={`${styles.stepItem} ${activeSteps.includes(i + 1) && styles.active}`} onClick={() => handleStepClick(i)}>
                    <div className='grid grid-cols-2 items-center gap-2'>
                        <div className='border rounded-full w-[23px] h-[23px] flex justify-center bg-blue-400 bg-opacity-30 items-center'>
                            <div className={`${styles.step}`}>

                            </div>
                        </div>
                        <p className='flex items-center gap-[14px]'>
                            <span className='text-text-black text-[35px] font-medium leading-normal'>{step.year}</span>
                            <span className='text-[#414141] whitespace-nowrap text-[18px] font-medium leading-[33px]'>{step.start}</span>
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Stepper;
