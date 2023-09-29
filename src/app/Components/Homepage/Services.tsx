import React from 'react'
import AccountCard from '../Reusable/Accountcard'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import styles from "../../css/about.module.css";
import Link from 'next/link';
const Services = () => {
  const iconStyle = {
    fontSize: '18px', 
    marginBottom:"36px"
  };
  const cardData = [
    {
      title: "Website Development",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      icon: "./assets/svg/website.svg",
      className: "mt-10 w-[268px] h-[293px] px-[27px] py-[36px] mx-auto ",
      path:"/Careers/"
    },
    {
      title: "Mobile App Development",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      icon: "./assets/svg/mobile.svg",
      className: "mt-10 w-[268px] h-[293px] px-[27px] py-[36px] mx-auto ",
      path:"/Services/"
    },
    {
      title: "Digital Marketing",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      icon: "./assets/svg/digital.svg",
      className: "mt-10 w-[268px] h-[293px] px-[27px] py-[36px] mx-auto ",
      path:"/HireDevelopers/"
    },
    {
      title: "Graphic Designing",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      icon: "./assets/svg/graphic.svg",
      className: "mt-10 w-[268px] h-[293px] px-[27px] py-[36px] mx-auto ",
      path:"/Services/Single"
    },
    {
      title: "UI/UX Designing",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      icon: "./assets/svg/uiux.svg",
      className: "mt-10 w-[268px] h-[293px] px-[27px] py-[36px] mx-auto ",
      path:"/HireDevelopers/AndroidDevelopers"
    },
    {
      title: "Software Testing",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      icon: "./assets/svg/software.svg",
      className: "mt-10 w-[268px] h-[293px] px-[27px] py-[36px] mx-auto ",
      path:"/ContactUs/"
    },
    {
      title: "Blockchain Development",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      icon: "./assets/svg/blockchain.svg",
      className: "mt-10 w-[268px] h-[293px] px-[27px] py-[36px] mx-auto ",
      path:"/Homepage/"
    },
    {
      title: "Cryptocurrency",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      icon: "./assets/svg/crypto.svg",
      className: "mt-10 w-[268px] h-[293px] px-[27px] py-[36px] mx-auto ",
      path:"/AboutUs/"
    },
  ];
  return (
    <div>
      <div className='grid justify-center mt-[100px]'>
        <p className='text-[14px] text-center  my-[5px] leading-normal font-semibold text-text-color'>Services</p>
        <p className='text-[24px] md:text-[30px] lg:text-[33px] font-bold leading-normal text-text-black max-w-[560px] text-center'>Our Services: Your One-Stop Shop
          for Every IT Services</p>
      </div>
      <div className={`grid sm:grid-cols-2  lg:grid-cols-4  ${styles.customcols} gap-[15px] lg:gap-[60px] mt-[70px]`}>
        
        {cardData.map((card, index) => (
          <Link href={`${card.path}`}>
          <AccountCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            className={card.className}
            link="Explore"
            LinkclassName="mt-[16px]"
            iconComponent={<NorthEastIcon style={iconStyle} className='hover:animate-ping'/>}
          /> </Link>
        ))}
       
      </div>
    </div>
  )
}

export default Services