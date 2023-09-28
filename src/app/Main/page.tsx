"use client";
import React from 'react'
import About from '../Components/Homepage/About'
import Advantages from '../Components/Homepage/Advantages'
import Dominance from '../Components/Homepage/Dominance';
import Journey from '../Components/Homepage/Journey';
import Services from '../Components/Homepage/Services'
import Testimonies from '../Components/Homepage/Testimonies';
import Footer from '../Components/Layout/Footer';
import Navbar from '../Components/Layout/Navbar'
import styles from "../../app/css/about.module.css";
import Layout from '../Components/Layout/layout';
const page = () => {

  return (
    <>
    <div className="relative background" id="demo">
    <Navbar/>
    <About />
    </div>
      <div className={`${styles.pxPadding} lg:px-[68px]`}>
        
        <Advantages />
        <Services />
      </div>
      <div className='mt-[71px] mb-10 md:mb-[100px]'>
        <Journey />
      </div>
      <div className={`${styles.pxPadding} lg:px-[68px]`}>
        <Dominance />
        <Testimonies />
      </div>
      </>
  )
}

export default page