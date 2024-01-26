import { Header } from "../../components/Header/Header";
import Hero from "./Hero";
import Analytics from "./Anaylitics";
import Cards from "./Cards";
import Newsletter from "./Newsletters";
import { Footer } from "../../components/Footer/Footer";
import Bussiness from "./Bussiness";
import { HorizontalScroller } from "../../components/HorizontalScroller";

function Home() {
  return (
    <>
      <Header />
      <HorizontalScroller />
      <Hero />
      <Analytics />
      <Cards />
      <Bussiness />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
