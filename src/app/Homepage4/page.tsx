import Layout from '../Components/Layout/layout'
import Benefits from './Benefits'
import Business from './Business'
import Choose from './Choose'
import Reviews from './Reviews'
import Website from './Website'
export default function Home() {
    return (
      <>
      <Layout>
      <Website/>
     <Choose/>
     <Benefits/>
     <Business/>
     <Reviews/>
     </Layout>
      </>
    )}