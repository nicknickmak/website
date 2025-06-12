import { playAudio } from "../utils/audioUtils";
import cardHoverAudio from "../audio/cardHover.mp3";
import cardClickAudio from "../audio/cardClick.mp3";
import "./Card.css";
import { useHistory } from "react-router-dom";

export default function Card({ cardData, typeName }) {
  const history = useHistory();

  function CardPress() {
    playAudio(cardClickAudio, 1);
    setTimeout(function () {
      history.push(`/${typeName}/${cardData._id}`);
    }, 700);
  }

  return (
    <div
      key={cardData._id}
      className="card"
      tabIndex="-1" //this enables the glow to happen when clicked
      onMouseEnter={() => playAudio(cardHoverAudio, 1)}
      onMouseUp={CardPress}
    >
      <div className="card-head">
        <img className="card-image" src={cardData.image} alt={cardData.name} />
        <div className="date-box">{cardData.dateShort}</div>
      </div>
      <div className="card-body">
        <h2>{cardData.name}</h2>
        <h3>{cardData.role}</h3>
        <h3>{cardData.tech}</h3>
      </div>
    </div>
  );
}
