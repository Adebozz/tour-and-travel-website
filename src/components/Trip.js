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
                heading="Trip in Iceland"
                text="Iceland, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, inclusing Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea. "
                />
                <TripData 
                image={Trip2}
                heading="Trip in Malaysia"
                text="Maleysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. Its known for its beaches rainforests and mix of malay. Chinese, Indian and European cultural influences."
                />
                <TripData 
                image={Trip3}
                heading="Trip in France"
                text="France, in Western Europe, encompasses medieval cities, airplane villages and Maditerranean beaches. Paris, its capital is farmed for its fashion houses, classical art museums including the Louvre and monuments like the effel Towel. "
                />
            </div>
        </div>
    );
}

export default Trip;