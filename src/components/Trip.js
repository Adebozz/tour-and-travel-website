import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assests/1 (4).jpg"
import Trip2 from "../assests/1 (5).jpg"
import Trip3 from "../assests/1 (6).jpg"

function Trip(){
    return(
        <div className="trip">
            <h1> Recent Trips </h1>
            <p>You can discover unique destinations using google maps.</p>
            <div className="tripcard">
                <TripData 
                image={Trip1}
                heading="Trip in Indonesia"
                text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, inclusing Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea. "
                />
                <TripData 
                image={Trip2}
                heading="Trip in Indonesia"
                text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, inclusing Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea. "
                />
                <TripData 
                image={Trip3}
                heading="Trip in Indonesia"
                text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, inclusing Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea. "
                />
            </div>
        </div>
    );
}

export default Trip;