import React from 'react'
import './SpecialButton.css';

import specialButtonHoverAudio from '../audio/specialButtonHover.mp3';
import specialButtonClickAudio from '../audio/specialButtonClick.mp3';

        var SBHover = new Audio();
        var SBClick = new Audio();

        SBHover.src = specialButtonHoverAudio;
        SBHover.volume = 0.5;

        SBClick.src = specialButtonClickAudio;
        SBClick.volume = 0.5;

        function SPPress(purpose) {
            SBClick.play();
            setTimeout(function(){ window.location.href =`${purpose.link}`}, 700);
        }


export default function SpecialButton(props) {
    const {purpose} = props;

    if(purpose.active)
    return (
        <div className="special-button" 
        tabIndex="-1"
        onMouseEnter={() => SBHover.play()}
        onMouseUp={() => SPPress(purpose)}
        >
            
            <div className="button-text">{purpose.action}</div>
            
            <div className="corner">
                <div className="top right"></div>
                <div className="top left"></div>
                <div className="bottom right"></div>
                <div className="bottom left"></div>
            </div>
                
            <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )

    else {
        return (
            <div className="special-button-2" 
        tabIndex="-1"
        onMouseEnter={() => SBHover.play()}
        >   
            <div className="button-text">{purpose.action}</div> 
            <div className="corner">
                <div className="top right"></div>
                <div className="top left"></div>
                <div className="bottom right"></div>
                <div className="bottom left"></div>
            </div>
        </div>
        )
    }
}