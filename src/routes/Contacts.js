import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImage from "../assests/1 (3).jpg"

function Contact (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={ContactImage}
        title="Contact"
        />
        </>
    )
}

export default Contact;