
import Navbar from '../Components/Layout/Navbar'
import Aboutus from "@abserve/app/AboutUs/About";
import Marketing from "@abserve/app/AboutUs/Marketing"
import Achievements from './Achievements';
import Ourclient from './Ourclient';
import Ourteam from './Ourteam';
import Getstarted from './Getstarted';
import Layout from '../Components/Layout/layout';
import styles from "../../app/css/about.module.css";
import Footer from '../Components/Layout/Footer';

export default function Home(props: any) {
  console.log("mnb", props)

  return (
    <><div className="relative about" id="demo">
      <Navbar />
      <div className={`${styles.pxPadding} relative about lg:px-[68px]`}>
        <Aboutus />
      </div>
    </div><div className={`${styles.pxPadding} lg:px-[68px]`}>

        <Achievements />
        <Marketing />
        <Ourclient />
        <Ourteam />
      </div><div>
        <Getstarted />
      </div><Footer /></>
  )
}