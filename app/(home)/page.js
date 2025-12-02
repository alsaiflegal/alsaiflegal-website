import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Services from './Services';
import ContactUs from './ContactUs';
import Locations from './Locations';
import Footer from "./Footer";


export default function Home() {

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <Hero />
      <About />
      <Services />
      <ContactUs />
      <Locations />
      <Footer />
    </div>
  );
}
