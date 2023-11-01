import Mountain1 from "../assests/1 (7).jpg"
import Mountain2 from "../assests/1 (8).jpg"
import Mountain3 from "../assests/1 (9).jpg"
import Mountain4 from "../assests/1 (10).jpg"
import "./DestinationStyles.css"

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see alot within a time frame</p>
            <div className="first-des">
                <div className="des-text">
                    <h2>Taal Volcano, Batangas</h2>
            <p>
                One of the mopst iconic views in Luzon, Mt Tall boasts a volcano inside a lake inaside an island. Of you fancy a closer look, the hike up to the creator is a mere 45 minutes, and is easy enpough for beginners. Guide's will assist you most of the way and you will see the peculiar environment found on an active colcano inclusing volcanic rocks and steam vents. The hikes can be dusty and hot so plan for an early morning trip, and then enwind with same bulalal before heading back home!
            </p>
            </div>
            <div className="image">
                <img alt="image1" src={Mountain1}/>
                <img alt="image2" src={Mountain2}/>
            </div>
            </div>
            
        </div>
    )
}

export default Destination;