import Layout from '../Components/Layout/layout'
import Benefits from './Benefits'
import Business from './Business'
import Choose from './Choose'
import styles from "../../app/css/about.module.css";
import Website from './Website'
import Testimonies from '../Components/Homepage/Testimonies'
export default function Home() {
  return (
    <>
      <Layout>
        <div className={`${styles.pxPadding} lg:px-[68px]`}>
          <Website />
          <Choose />
          <Benefits />
        </div>
        <div>
          <Business />
        </div>
        <div className={`${styles.pxPadding} lg:px-[68px]`}>
          <Testimonies />
        </div>
      </Layout>
    </>
  )
}