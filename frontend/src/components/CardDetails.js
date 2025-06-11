import SpecialButton from "./SpecialButton";
import "./CardDetails.css";

function CardDetails({ cardDetails, isMobile }) {
  return (
    <div className={`notHome ${isMobile ? "mobile" : ""}`}>
      <div className="col-1">
        <div className="imageCard">
          <div className="imageCover">
            <h1>{cardDetails.name}</h1>
            <p>{cardDetails.date}</p>
          </div>
          <img src={cardDetails.image} alt={cardDetails.name}></img>
        </div>
      </div>
      <div className="details-body">
        <ul>
          <li>
            <h1>{cardDetails.role}</h1>
          </li>
          <li>{cardDetails.tech}</li>
          <br />
          <li>
            Description:
            <p>{cardDetails.description}</p>
          </li>
        </ul>
        <br />
        <SpecialButton purpose={cardDetails}></SpecialButton>
      </div>
    </div>
  );
}

export default CardDetails;
