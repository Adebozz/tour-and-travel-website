import DestinationData from "./DestinationData";
import "./DestinationStyles.css"

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see alot within a time frame</p>
           <DestinationData />
        </div>
    )
}

export default Destination;