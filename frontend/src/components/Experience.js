import React from 'react'

import cardHoverAudio from '../audio/cardHover.mp3';
import cardClickAudio from '../audio/cardClick.mp3';

function play_F(file, vol){
    var audio = document.createElement('audio');
    audio.src = file;
    audio.volume = vol;
    document.body.appendChild(audio);
    audio.play();
    
    audio.onended = function () {
      this.parentNode.removeChild(this);
    }
}

function CardPress(experience) {
    play_F(cardClickAudio, 1);
    setTimeout(function(){ window.location.href =`/experience/${experience._id}`}, 700);
}

export default function Experience(props) {
    const {experience} = props;
    return (
        <div key={experience._id}  
        className="card"
        tabindex="-1" //this enables the glow to happen when clicked
        onMouseEnter={() => play_F(cardHoverAudio, 1)}
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