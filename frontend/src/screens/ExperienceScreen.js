import React, { useEffect } from 'react';
import SpecialButton from '../components/SpecialButton';

import loadin1Audio from '../audio/loadin1.mp3';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsExperience } from '../actions/experienceActions';

        var loadin1 = new Audio();
      
        loadin1.src = loadin1Audio;
        loadin1.volume = 0.5;

export default function ExperienceScreen(props) {
    const dispatch = useDispatch();
    const experienceId = props.match.params.id;
    const experienceDetails = useSelector(state => state.experienceDetails);
    const { loading, error, experience } = experienceDetails;

    useEffect(() =>{
        dispatch(detailsExperience(experienceId));
    },[dispatch, experienceId]);


    return (
        <div>

            {loading? <LoadingBox></LoadingBox>
            :
            error?<MessageBox variant="danger">{error}</MessageBox>
            : 
                <div className="notHome">
                <div className="col-1 fadein" onLoad={() => loadin1.play()}>
                    <div className="row top">
                        <div className="col-1">
                            <div className="imageCard">
                                <div className="imageCover">
                                    <h1>{experience.name}</h1>
                                    <p>{experience.date}</p>
                                </div>
                                <img className="large" src={experience.image} alt={experience.name}></img>
                            </div>
                        </div>
                        <div className="col-1">
                            <ul>
                                <li>
                                    <h1>{experience.name}</h1>
                                </li>
                                <li>
                                    {experience.tech}
                                </li>
                                <br></br>
                                <li>
                                    Description:
                                    <p>{experience.description}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row center">
                        <SpecialButton purpose={experience}></SpecialButton>
                    </div>
                </div>
            </div>
            }
            
        </div>





    );
}