import Testimonies from "@abserve/app/Components/Homepage/Testimonies";
import Layout from "@abserve/app/Components/Layout/layout";
import Chooseus from "./Chooseus";
import Industries from "./Industries";
import Sendquery from "./Sendquery";
import Platform from "./platform";
import Topquality from "./Topquality";
import styles from "@abserve/app/css/about.module.css"
import Achievements from "@abserve/app/AboutUs/Achievements";
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