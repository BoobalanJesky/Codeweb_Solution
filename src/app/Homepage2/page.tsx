import Navbar from '../Components/Layout/Navbar'
import Aboutus from "@abserve/app/Homepage2/About";
import Marketing from "@abserve/app/Homepage2/Marketing"
import Achievements from './Achievements';
import Ourclient from './Ourclient';
import Ourteam from './Ourteam';
import Getstarted from './Getstarted';
import Footer from '../Components/Layout/Footer';
import Layout from '../Components/Layout/layout';
export default function Home() {
  return (
    <Layout>
    <Aboutus/>
    <Achievements/>
    <Marketing/>
    <Ourclient/>
    <Ourteam/>
    <Getstarted/>

    </Layout>  
    )
}