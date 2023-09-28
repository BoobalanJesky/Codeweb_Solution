import Layout from '@abserve/app/Components/Layout/layout'
import Benefits from './Benefits'
import Business from './Business'
import Choose from './Choose'
import styles from "@abserve/app/css/about.module.css";
import Website from './Website'
import Testimonies from '@abserve/app/Components/Homepage/Testimonies'
import Navbar from '@abserve/app/Components/Layout/Navbar';
import Footer from '@abserve/app/Components/Layout/Footer';
export default function Home() {

  return (
    <>
      <div className="relative about" id="demo">
        <Navbar />
        <div className={`${styles.pxPadding} relative about lg:px-[68px]`}>
          <Website />
        </div>
      </div>
      <div className={`${styles.pxPadding} lg:px-[68px]`}>

        <Choose />
        <Benefits />
      </div>
      <div>
        <Business />
      </div>
      <div className={`${styles.pxPadding} lg:px-[68px]`}>
        <Testimonies />
      </div>
      <Footer />
    </>
  )
}