import Layout from "../Components/Layout/layout";
import Navbar from "../Components/Layout/Navbar";
import Achievements from "./Achievements";
import Hire from "./Hire";
export default function Home() {
    return (
      <Layout>
      <Hire/>
      <Achievements/>
      </Layout>
    )
}