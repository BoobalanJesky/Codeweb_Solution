import Layout from "../Components/Layout/layout";
import Business from "../Homepage4/Business";
import Achievements from "./Achievements";
import Developer from "./Developer";
import Hire from "./Hire";
import Technologies from "./Technologies";
import styles from "../css/about.module.css"
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