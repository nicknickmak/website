import { playAudio } from "../utils/audioUtils";
import cardHoverAudio from "../audio/cardHover.mp3";
import cardClickAudio from "../audio/cardClick.mp3";

function CardPress(cardData, typeName) {
  playAudio(cardClickAudio, 1);
  setTimeout(function () {
    window.location.href = `/${typeName}/${cardData._id}`;
  }, 700);
}

export default function Card({ cardData, typeName }) {
  return (
    <div
      key={cardData._id}
      className="card"
      tabIndex="-1" //this enables the glow to happen when clicked
      onMouseEnter={() => playAudio(cardHoverAudio, 1)}
      onMouseUp={() => CardPress(cardData, typeName)}
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
