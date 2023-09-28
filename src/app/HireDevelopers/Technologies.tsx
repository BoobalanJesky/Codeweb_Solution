import React from 'react'
import AccountCard from '../Components/Reusable/Accountcard'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import styles from "../../app/css/about.module.css";
const cardData = [
    {
      title: "Website Development",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      icon: "/assets/image/Vector(6).png"
    },
    {
      title: "Mobile App Development",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      icon: "/assets/image/Clip path group.png"
    },
    
    {
      title: "Hire AngularJS Developers",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      icon: "/assets/image/Clip path group(1).png"
    },
    {
        title: "Hire Laravel Developers",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        icon: "/assets/image/Vector(7).png"
      },
      {
        title: "Hire Flutter Developers",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        icon: "/assets/image/Flutter.png"
      },
    {
        title: "Software Testing",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        icon: "/assets/svg/software.svg"
      },
      {
        title: "Blockchain Development",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        icon: "/assets/svg/blockchain.svg"
      },
      {
        title: "Cryptocurrency",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        icon: "assets/svg/crypto.svg"
      },
  ];
  
export default function Technologies() {
    const iconStyle = {
        fontSize: '18px', 
        marginBottom:"36px"
      };
    return (
        <div className=' mt-[70px] lg:mt-[186px]'>
            <div className='grid justify-center'>
                <p className='text-[14px] text-center leading-normal font-semibold text-text-color'>Technologies</p>
                <p className='text-[28px] md:text-[30px] lg:text-[33px] font-bold leading-normal text-text-black max-w-[600px] text-center'>List of Technologies We Offer
                    Dedicated Developers For</p>
            </div>
            <div className={`md:mt-[70px] grid sm:grid-cols-2 gap-4 lg:gap-0 lg:grid-cols-4  ${styles.customcols}`}>
            {cardData.map((card, index) => (
        <AccountCard
          key={index}
          title={card.title}
          description={card.description}
          icon={card.icon}
          className="mt-10 sm:w-[268px] px-[27px] text-[14px] py-[25px] mx-auto"
          imageClassName="mt-[18px]"
          link="Explore"
          LinkclassName="mt-[16px]"
          iconComponent={<NorthEastIcon style={iconStyle} />}
        />
      ))}
            </div>
        </div>
    )
}

