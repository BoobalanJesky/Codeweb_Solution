import React from 'react'
import styles from "../css/about.module.css"
const Assistance = () => {
  const cards = [
    {
      icon: "./assets/svg/target.svg",
      title: "Office location",
      location: "United States"
    },
    {
      icon: "./assets/svg/cal.svg",
      title: "Office location",
      location: "United States"
    },
    {
      icon: "./assets/svg/mail.svg",
      title: "Office location",
      location: "United States"
    }
  ];
  return (
    <>
      <section className='relative mt-[119px]'>
        <img src="./assets/svg/spring.svg" className='absolute hidden md:block lg:left-[103px]' />
        <div className='grid justify-items-center relative'>
          <p className='text-[14px] font-semibold leading-normal text-text-color'>Get In Touch</p>
          <p className='text-[35px] text-center font-bold relative leading-normal max-w-[326px]'>
            We’re Here To Help You Any Time!
            {[41, 81, 41].map((top, index) => (
              <img
                key={index}
                src="./assets/image/fade.png"
                className={`absolute top-[${top}px] hidden md:block ${index === 0 ? 'left-[-60px]' : index === 1 ? 'right-[-20px]' : 'md:right-[-126px] lg:right-[-225px]'
                  }`}
              />
            ))}
          </p>
        </div>
        <div className='mt-[70px] flex justify-center gap-2 p-2 gap-y-10 flex-wrap mx-auto'>
          {cards.map((card, index) => (
            <div key={index} className='flex justify-center items-center h-full w-full sm:w-[338px] py-[54px] rounded-[21px] border m-auto shadow-sm'>
              <div className='grid gap-[21px] relative'>
                <img src="./assets/image/ellipse.png" className='mx-auto' alt='Ellipse' />
                <img src={card.icon} style={{ position: 'absolute', top: '36px', left: `${index === 2 ? '41px' : '46px'}` }} alt='Icon' />
                <p className='text-[18px] leading-[33px] font-medium text-center'>{card.title}</p>
                <p className='text-[16px] font-semibold leading-[25px] text-center'>{card.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section></>
  )
}

export default Assistance