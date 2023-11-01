import Hero from "../components/Heroes";
import Navbar from "../components/Navbar";
import ContactImage from "../assests/1 (3).jpg";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={ContactImage} title="Contact" />
      <Footer />
    </>
  );
}

export default Contact;
