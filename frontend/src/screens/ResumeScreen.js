import React from 'react';
import Resume from '../images/Nick_Mak_Resume_2023.pdf';

import loadin1Audio from '../audio/loadin1.mp3';

        var loadin1 = new Audio();
      
        loadin1.src = loadin1Audio;
        loadin1.volume = 0.5;

export default function ResumeScreen() {
    return (
        <div className="row center fadein" onLoad={() => loadin1.play()}>
            <div className="resume">
                <iframe title="Nick Mak Resume" src={Resume + "#zoom=fitW"} width="auto" height="auto"></iframe>
            </div>
        </div>
    )
}