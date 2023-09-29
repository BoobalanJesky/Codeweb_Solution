import Layout from "../Components/Layout/layout";
import Business from "@abserve/app/Services/Single/Business";
import Developer from "./Developer";
import Hire from "./Hire";
import Technologies from "./Technologies";
import styles from "@abserve/app/css/about.module.css"
import Achievements from "@abserve/app/AboutUs/Achievements";
import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";
export default function Home() {
  return (
    <>
      <div className="relative about" id="demo">
        <Navbar />
        <div className={`${styles.pxPadding} relative about lg:px-[68px]`}>
          <Hire />
        </div>
      </div>
      <div className={`${styles.pxPadding} lg:px-[68px]`}>

        <Achievements />
        <Technologies />
      </div>
      <div>
        <Business />
      </div>
      <Footer />
    </>
  )
}