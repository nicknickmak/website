import React from 'react'
import loadingAudio from '../audio/loadingAnimation.mp3';
import { playAudio } from '../utils/audioUtils';


export default function LoadingBox() {
    return (
        <div className ="row center">
            <img className="loading" src="/images/animation.gif" alt="LOADING"
            onLoad={() => playAudio(loadingAudio)}
            ></img>
        </div>
    )
}