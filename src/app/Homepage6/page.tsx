import Testimonies from "../Components/Homepage/Testimonies";
import Layout from "../Components/Layout/layout";
import Achievements from "./Achievements";
import Chooseus from "./Chooseus";
import Industries from "./Industries";
import Sendquery from "./Sendquery";
import Platform from "./platform";
import Topquality from "./Topquality";
export default function Home() {
    return (
        <>
            <Layout>
            <Sendquery />
            <Achievements/>
            <Chooseus/>
            <Platform/>
            <Topquality/>
            <Industries/>
           {/* <Testimonies/> */}
            </Layout>
        </>
    )
}