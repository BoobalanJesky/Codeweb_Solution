import React from 'react'
import Layout from '../Components/Layout/layout'
import Assistance from './assistance'
import styles from "../css/about.module.css"
import Business from '../Homepage4/Business'
import Faq from './faq'
const page = () => {


  return (
    <Layout>
        <div className={`${styles.pxPadding} lg:px-[68px]`}>
    <Assistance/>
    <div><Business/></div>
    <Faq/>
    </div>
    
    </Layout>
  )
}

export default page