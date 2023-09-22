"use client"
import React, { useState } from 'react';
import styles from "../../css/stepper.module.css";

const Stepper = () => {
    const [activeSteps, setActiveSteps] = useState([1]);
    const steps = [2020, 2021, 2022, 2023];
    
    const handleStepClick = (index) => {
        setActiveSteps([...Array(index + 1).keys()].map(i => i + 1));
    }
    
    return (
        <section className={`${styles.verticalStepper} flex flex-col items-center`}>
            {steps.map((step, i) => (
                <div key={i} className={`${styles.stepItem} ${activeSteps.includes(i + 1) && styles.active}`} onClick={() => handleStepClick(i)}>
                    <div className='w-[14px] flex gap-2'><div className={`${styles.step}`}></div>
                    
                    <p className='text-text-color'>
                        {step}
                    </p></div>
                    
                </div>
            ))}
        </section>
    );
}

export default Stepper;
