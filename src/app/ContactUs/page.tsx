import React from 'react'
import Layout from '../Components/Layout/layout'
import Assistance from './assistance'
import styles from "@abserve/app/css/about.module.css"
import Business from '@abserve/app/Services/Single/Business'
import Faq from './faq'
import Navbar from '../Components/Layout/Navbar'
import Footer from '../Components/Layout/Footer'
const page = () => {


  return (<>
    <div className="relative about" id="demo">
    <Navbar/>
    <div className={`${styles.pxPadding} relative about lg:px-[68px]`}>
    <Assistance />
    </div>
    </div>
      <div><Business /></div>
      <div className={`${styles.pxPadding} lg:px-[68px] mb-[100px]`}>
        <Faq/>
      </div>
      <Footer/>
      </>
  )
}

export default page