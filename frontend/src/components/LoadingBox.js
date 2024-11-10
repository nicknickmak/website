import React from 'react'
import loadingAudio from '../audio/loadingAnimation.mp3';


function play_F(file){
    var audio = document.createElement('audio');
    audio.src = file;
    audio.volume = 1;
    document.body.appendChild(audio);
    audio.play();    
    audio.onended = function () {
      this.parentNode.removeChild(this);
    }
  }


export default function LoadingBox() {
    return (
        <div className ="row center">
            <img className="loading" src="/images/animation.gif" alt="LOADING"
            onLoad={() => play_F(loadingAudio)}
            ></img>
        </div>
    )
}