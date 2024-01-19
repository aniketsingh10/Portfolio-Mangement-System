
import { Header } from "../../components/Header/Header";
import Hero from "./Hero";
import Analytics from "./Anaylitics";
import Cards from "./Cards";
import Newsletter from "./Newsletters";
import { Footer } from "../../components/Footer/Footer";


function Home() {
  return (
    <>
      <Header />
      
      <Hero />
      <Analytics />
      <Cards />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
