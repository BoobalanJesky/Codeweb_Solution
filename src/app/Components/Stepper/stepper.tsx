"use client"
import React, { useState } from 'react';
import styles from "../../css/stepper.module.css";

const Stepper = () => {
    const [activeSteps, setActiveSteps] = useState<number[]>([1]);
    const steps = [{ year: 2020, start: "Startup Company Founded" },
    { year: 2021, start: "Create Professional Teams" },
    { year: 2022, start: "700+ Successful projects Completed" },
    { year: 2023, start: "Winning Best Company Awards" },
    ];
    const handleStepClick = (index: number) => {
        const newActiveSteps: number[] = [];
        for (let i = 1; i <= index + 1; i++) {
            newActiveSteps.push(i);
        }
        setActiveSteps(newActiveSteps);
    };


    return (
        <section className={`${styles.verticalStepper}   gap-[67px] md:gap-[40px] lg:gap-[90px] grid justify-center items-start`}>
            {steps.map((step, i) => (
                <div className='relative' key={i}>
                    <div className='flex gap-[28px] items-center'>
                        <div
                            className={`${styles.stepItem} ${activeSteps.includes(i + 1) && styles.active}`}
                            onClick={() => handleStepClick(i)}
                        >
                            <div className='border rounded-full w-[23px] h-[23px] flex justify-center bg-blue-400 bg-opacity-30 items-center'>
                                <div className={`${styles.step}`}></div>
                            </div>
                        </div>
                        <p className='text-text-black md:text-[15px] lg:text-[35px] font-medium leading-normal'>{step.year}</p>
                        <p className='text-[#414141] md:text-[13px] lg:text-[18px] font-medium leading-[33px]'>{step.start}</p>
                    </div>
                    {i < 3 && (
                        <div className='bg-slate-200 h-[130px] md:h-[66px] lg:h-[120px] w-[3px] mx-auto absolute top-[28px] lg:top-[40px] left-[8px]'></div>
                    )}
                </div>
            ))}

        </section >
    );
}

export default Stepper;