import React from 'react'
import { playAudio } from '../utils/audioUtils';
import cardHoverAudio from '../audio/cardHover.mp3';
import cardClickAudio from '../audio/cardClick.mp3';

function CardPress(project) {
    playAudio(cardClickAudio, 1);
    setTimeout(function(){ window.location.href =`/project/${project._id}`}, 700);
}

export default function Project(props) {
    const {project} = props;
    return (
        <div key={project._id}  
        className="card"
        tabindex="-1" //this enables the glow to happen when clicked
        onMouseEnter={() => playAudio(cardHoverAudio, 1)}
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