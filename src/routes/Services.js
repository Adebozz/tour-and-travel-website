import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServivesImage from "../assests/1 (4).jpg"

function Service (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={ServivesImage}
        title="Services"
        />
        </>
    )
}

export default Service;