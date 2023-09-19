"use client";
import React from 'react'
import About from '../Components/Homepage/About'
import Advantages from '../Components/Homepage/Advantages'
import Dominance from '../Components/Homepage/Dominance';
import Journey from '../Components/Homepage/Journey';
import Services from '../Components/Homepage/Services'
import Testimonies from '../Components/Homepage/Testimonies';
import Navbar from '../Components/Layout/Navbar'

const page = () => {
  
  return (
    <>
    {/*  */}
    <div className=' px-[68px]'>
        <Navbar/>
        <About/>
        
        <Advantages/>
        <Services/>
    </div>
    <div className='mt-[71px] mb-[100px] '>
      <Journey/>
    </div>
    <div className='px-[68px]'>
    <Dominance/>
    <Testimonies/>
    </div>
    </>  )
}

export default page