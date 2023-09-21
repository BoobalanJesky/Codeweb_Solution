import Layout from "../Components/Layout/layout";
import Achievements from "./Achievements";
import Developer from "./Developer";
import Hire from "./Hire";
import Technologies from "./Technologies";
export default function Home() {
    return (
      <>
      <Layout/>
      <Hire/>
      <Achievements/>
      <Technologies/>
      <Developer/>
      </>
    )
}