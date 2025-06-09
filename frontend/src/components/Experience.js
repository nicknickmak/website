import React from 'react'
import { playAudio } from '../utils/audioUtils';
import cardHoverAudio from '../audio/cardHover.mp3';
import cardClickAudio from '../audio/cardClick.mp3';

function CardPress(experience) {
    playAudio(cardClickAudio, 1);
    setTimeout(function(){ window.location.href =`/experience/${experience._id}`}, 700);
}

export default function Experience(props) {
    const {experience} = props;
    return (
        <div key={experience._id}  
        className="card"
        tabindex="-1" //this enables the glow to happen when clicked
        onMouseEnter={() => playAudio(cardHoverAudio, 1)}
        onMouseUp={() => CardPress(experience)}
        >
            <div className="card-head">
                <img className="card-image" src={experience.image} alt={experience.name} />
                <div className="date-box">{experience.dateShort}</div>
            </div>
            <div className="card-body">
                <h2>{experience.name}</h2>
                <h3>{experience.role}</h3>
                <h3>{experience.tech}</h3>
            </div>
        </div>
    )
}