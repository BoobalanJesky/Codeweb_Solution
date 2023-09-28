import Layout from "../Components/Layout/layout";
import Careers from "./careers";
import styles from "../../app/css/about.module.css";
import Believe from "./Believe";
import Vacancies from "./Vacancies";
import Business from "@abserve/app/Services/Single/Business";
export default function Home() {
    return (
        <>
        <Layout>
        <div className={`${styles.pxPadding} lg:px-[68px]`}>
        <Careers/>
        <Believe/>
        <Vacancies/>
        </div>
        <Business/>
        </Layout>
        </>
    )
}