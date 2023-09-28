
import Navbar from '../Components/Layout/Navbar'
import Aboutus from "@abserve/app/Homepage2/About";
import Marketing from "@abserve/app/Homepage2/Marketing"
import Achievements from './Achievements';
import Ourclient from './Ourclient';
import Ourteam from './Ourteam';
import Getstarted from './Getstarted';
import Layout from '../Components/Layout/layout';
import styles from "../../app/css/about.module.css";

export default function Home(props) {
console.log("mnb",props)

  return (
    <Layout> 
  
      <div className={`${styles.pxPadding} lg:px-[68px]`}>
        <Aboutus />
        <Achievements />
        <Marketing />
        <Ourclient />
        <Ourteam />
      </div>
      <div>
        <Getstarted />
      </div>
    </Layout>
  )
}