import Layout from '@abserve/app/Components/Layout/layout'
import Unique from '@abserve/app/Services/Unique'
import styles from "@abserve/app/css/about.module.css";
import Services from '@abserve/app/Components/Homepage/Services';
import Innovative from '@abserve/app/Services/innovative';
import Navbar from '../Components/Layout/Navbar';
import Footer from '../Components/Layout/Footer';
export default function Home() {
  return (
    <>
    <div className="relative about" id="demo">
    <Navbar/>
    <div className={`${styles.pxPadding} relative about lg:px-[68px]`}>
    <Innovative />
    </div>
    </div>
        <div className={`${styles.pxPadding} lg:px-[68px]`}>
          
          <Services />
        </div>
        <div>
          <Unique />
        </div>
     <Footer/>
    </>
  )
}