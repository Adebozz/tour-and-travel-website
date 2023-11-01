import Navbar from "../components/Navbar";
import Hero from "../components/Heroes";
import AboutImage from "../assests/1 (10).jpg";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImage} title="About" />
    </>
  );
}

export default About;
