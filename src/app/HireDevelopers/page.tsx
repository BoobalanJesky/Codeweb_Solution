import Layout from "../Components/Layout/layout";
import Business from "@abserve/app/Services/Single/Business";
import Developer from "./Developer";
import Hire from "./Hire";
import Technologies from "./Technologies";
import styles from "@abserve/app/css/about.module.css"
import Achievements from "@abserve/app/AboutUs/Achievements";
export default function Home() {
  return (
    <>
      <Layout>
        <div className={`${styles.pxPadding} lg:px-[68px]`}>
          <Hire />
          <Achievements />
          <Technologies />
        </div>
        <div>
        <Business/>
          </div>
      </Layout>
    </>
  )
}