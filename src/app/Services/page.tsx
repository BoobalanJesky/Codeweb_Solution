import Layout from '../Components/Layout/layout'
import Unique from './Unique'
import styles from "../../app/css/about.module.css";
import Services from '../Components/Homepage/Services';
import Innovative from './innovative';
export default function Home() {
  return (
    <>
      <Layout>
        <div className={`${styles.pxPadding} lg:px-[68px]`}>
          <Innovative />
          <Services />
        </div>
        <div>
          <Unique />
        </div>
      </Layout>
    </>
  )
}