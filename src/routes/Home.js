import Navbar from "../components/Navbar";
import Hero from "../components/hero";

function Home (){
    return( 

        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg="/"
        title="Your Journey Your Story"
        text="Choose Your favorite destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        </>
    )
}

export default Home;