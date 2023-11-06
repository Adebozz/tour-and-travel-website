import Navbar from "../components/Navbar";
import Hero from "../components/Heroes";
import AboutImage from "../assests/1 (10).jpg";
import Footer from "../components/Footer";


function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImage} title="About" />
      <About />
      <Footer />
    </>
  );
}

export default About;
