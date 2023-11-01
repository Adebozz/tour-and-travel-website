import Hero from "../components/Heroes";
import Navbar from "../components/Navbar";
import ServivesImage from "../assests/1 (4).jpg";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={ServivesImage} title="Services" />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
