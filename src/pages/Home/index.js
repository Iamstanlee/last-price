import { lazy } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
const Container = lazy(() => import("../../common/Container"))

const Home = () => {
  return (
    <>
      <Header />
      <Container></Container>
      <Footer />
    </>
  )
}

export default Home
