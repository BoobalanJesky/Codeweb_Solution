import Testimonies from "../Components/Homepage/Testimonies";
import Layout from "../Components/Layout/layout";
import Chooseus from "./Chooseus";
import Industries from "./Industries";
import Sendquery from "./Sendquery";
import Platform from "./platform";
import Topquality from "./Topquality";
import styles from "../css/about.module.css"
import Achievements from "../Homepage2/Achievements";
export default function Home() {
    return (
        <>
            <Layout>
            <div className={`${styles.pxPadding} lg:px-[68px]`}>
            <Sendquery />
            <Achievements/>
            <Chooseus/>
            <Platform/>
            </div> 
            <Topquality/>
            <div className={`${styles.pxPadding} lg:px-[68px]`}>
            <Industries/>
            <Testimonies />
            </div>
            </Layout>
        </>
    )
}