import React from "react";
import { playAudio } from "../utils/audioUtils";
import cardHoverAudio from "../audio/cardHover.mp3";
import cardClickAudio from "../audio/cardClick.mp3";
import "./Card.css";
import { useHistory } from "react-router-dom";

export default function Card({ cardData, typeName }) {
  const history = useHistory();
  // Minimal movement threshold logic
  const startPos = React.useRef();
  const moved = React.useRef(false);
  const THRESHOLD = 10;

  function handleDown(e) {
    const p = e.touches ? e.touches[0] : e;
    startPos.current = { x: p.clientX, y: p.clientY };
    moved.current = false;
  }
  function handleMove(e) {
    const p = e.touches ? e.touches[0] : e;
    if (!startPos.current) return;
    if (
      Math.abs(p.clientX - startPos.current.x) > THRESHOLD ||
      Math.abs(p.clientY - startPos.current.y) > THRESHOLD
    ) {
      moved.current = true;
    }
  }
  function handleUp() {
    if (moved.current) return;
    playAudio(cardClickAudio, 1);
    setTimeout(() => {
      history.push(`/${typeName}/${cardData._id}`);
    }, 700);
  }

  return (
    <div
      key={cardData._id}
      className="card"
      tabIndex="-1"
      onMouseEnter={() => playAudio(cardHoverAudio, 1)}
      onMouseDown={handleDown}
      onMouseMove={handleMove}
      onMouseUp={handleUp}
      onTouchStart={handleDown}
      onTouchMove={handleMove}
      onTouchEnd={handleUp}
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
