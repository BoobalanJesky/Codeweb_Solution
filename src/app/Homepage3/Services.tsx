import React from 'react'
import AccountCard from '../Components/Reusable/Accountcard'
export default function Services() {
  return (
    <div className='px-[15px] sm:px-[20px] md:px-[30px] lg:px-[70px] mt-[70px] lg:mt-[271px]'>
        <div className='grid justify-center'>
            <p className='text-[14px] text-center leading-normal font-semibold text-text-color'>Services</p>
            <p className='text-[28px] md:text-[30px] lg:text-[33px] font-bold leading-normal text-text-black max-w-[600px] text-center'>Our Services: Your One-Stop Shop 
for Every IT Services</p>
        </div>
        <div className='mt-[70px] flex flex-wrap justify-around gap-[40px]'>
             <AccountCard
            title="Website Development"
            description="Lorem Ipsum is simply 
            dummy text of the printing."
            icon="/assets/svg/website.svg"
            className="mt-10 w-[240px] mx-auto"
          />
             <AccountCard
            title="Mobile App Development"
            description="Lorem Ipsum is simply 
            dummy text of the printing."
            icon="/assets/svg/mobile.svg"
            className="mt-10 w-[240px] mx-auto"
          />
             <AccountCard
            title="Digital Marketing"
            description="Lorem Ipsum is simply 
            dummy text of the printing."
            icon="/assets/svg/digital.svg"
            className="mt-10 w-[240px] mx-auto"
          />
             <AccountCard
            title="Graphic Designing"
            description="Lorem Ipsum is simply 
            dummy text of the printing."
            icon="/assets/svg/graphic.svg"
            className="mt-10 w-[240px] mx-auto"
          />
             <AccountCard
            title="UI/UX Designing"
            description="Lorem Ipsum is simply 
            dummy text of the printing."
            icon="/assets/svg/uiux.svg"
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

