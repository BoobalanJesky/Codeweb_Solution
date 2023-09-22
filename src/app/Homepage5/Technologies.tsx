import React from 'react'
import AccountCard from '../Components/Reusable/Accountcard'
export default function Technologies() {
    return (
        <div className='px-[15px] sm:px-[20px] md:px-[30px] lg:px-[70px] mt-[70px] lg:mt-[186px]'>
            <div className='grid justify-center'>
                <p className='text-[14px] text-center leading-normal font-semibold text-text-color'>Technologies</p>
                <p className='text-[28px] md:text-[30px] lg:text-[33px] font-bold leading-normal text-text-black max-w-[600px] text-center'>List of Technologies We Offer
                    Dedicated Developers For</p>
            </div>
            <div className='md:mt-[70px] flex flex-wrap justify-center gap-[15px] lg:gap-[76px]'>
                <AccountCard
                    title="Website Development"
                    description="Lorem Ipsum is simply 
            dummy text of the printing."
                    icon="/assets/image/Vector(6).png"
                    className="mt-10 w-[240px] mx-auto"
                />
                <AccountCard
                    title="Mobile App Development"
                    description="Lorem Ipsum is simply 
            dummy text of the printing."
                    icon="/assets/image/Clip path group.png"
                    className="mt-10 w-[240px] mx-auto"
                />
                <AccountCard
                    title="Digital Marketing"
                    description="Lorem Ipsum is simply 
            dummy text of the printing."
                    icon="/assets/image/Clip path group(1).png"
                    className="mt-10 w-[240px] mx-auto"
                />
                <AccountCard
                    title="Graphic Designing"
                    description="Lorem Ipsum is simply 
            dummy text of the printing."
                    icon="/assets/image/Vector(7).png"
                    className="mt-10 w-[240px] mx-auto"
                />
                <AccountCard
                    title="UI/UX Designing"
                    description="Lorem Ipsum is simply 
            dummy text of the printing."
                    icon="/assets/image/Flutter.png"
                    className="mt-10 w-[240px] mx-auto"
                />
                <AccountCard
                    title="Software Testing"
                    description="Lorem Ipsum is simply 
            dummy text of the printing."
                    icon="/assets/svg/software.svg"
                    className="mt-10 w-[240px] mx-auto"
                />
                <AccountCard
                    title="Blockchain Development"
                    description="Lorem Ipsum is simply 
            dummy text of the printing."
                    icon="/assets/svg/blockchain.svg"
                    className="mt-10 w-[240px] mx-auto"
                />
                <AccountCard
                    title="Cryptocurrency"
                    description="Lorem Ipsum is simply 
            dummy text of the printing."
                    icon="/assets/svg/crypto.svg"
                    className="mt-10 w-[240px] mx-auto"
                />
            </div>
        </div>
    )
}

