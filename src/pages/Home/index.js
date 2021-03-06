import { lazy } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
const Container = lazy(() => import("../../common/Container"))
const Hero = lazy(() => import("../../components/Hero"))
const Product = lazy(() => import("../../components/Product"))

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero
          title="Best deals just for you!"
          content="Everyday is black friday on lastprice. Buy items almost for free!, Seriously."
          button="Buy Now"
          icon="hero.png"
          id="hero"
        />
        <Product id="product" title="Hot Deals 🔥" />
      </Container>
      <Footer />
    </>
  )
}

export default Home
