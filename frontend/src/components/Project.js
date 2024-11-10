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

function CardPress(project) {
    play_F(cardClickAudio, 1);
    setTimeout(function(){ window.location.href =`/project/${project._id}`}, 700);
}

export default function Project(props) {
    const {project} = props;
    return (
        <div key={project._id}  
        className="card"
        tabindex="-1" //this enables the glow to happen when clicked
        onMouseEnter={() => play_F(cardHoverAudio, 1)}
        onMouseUp={() => CardPress(project)}
        >
            <div className="card-head">
                <img className="card-image" src={project.image} alt={project.name} />
                <div className="date-box">{project.dateShort}</div>
            </div>


            <div className="card-body">
                <h2>{project.name}</h2>
                <h3>{project.tech}</h3>
            </div>
        </div>
    )
}