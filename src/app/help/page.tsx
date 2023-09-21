import React from 'react'
import Layout from '../Components/Layout/layout'
import styles from "../css/about.module.css"
const page = () => {
  return (
    <Layout>
      <section className='relative '>
     
          <img src="/assets/svg/spring.svg" className='absolute left-[255px]'/>
       
        <div className='grid justify-items-center'>
          <p className={`${styles.fadeDesign}`}>Get In Touch</p>
          <p className='text-[35px] text-center font-bold leading-normal max-w-[326px]'>We’re Here To Help
            You Any Time!</p>
        </div>
        {/* <img src="/assets/image/fade.png" className=''/ > */}
      </section>
    </Layout>
  )
}

export default page