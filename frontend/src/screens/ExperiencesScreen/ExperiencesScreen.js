import React, { useEffect } from 'react';
import Experience from '../../components/Experience';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import cardHoverAudio from '../../audio/cardHover.mp3';
import cardOpenAudio from '../../audio/cardOpen.mp3';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listExperiences } from '../../actions/experienceActions';

import '../carousel.css';
import { playAudio } from '../../utils/audioUtils';

export default function ExperiencesScreen() {
    function useFetchExperiences() {
      const dispatch = useDispatch();
      const experienceList = useSelector((state) => state.experienceList);
      const { loading, error, experiences } = experienceList;
      useEffect(() => {
        dispatch(listExperiences());
      }, [dispatch]);
      // Sort experiences by number, ascending
      const sortedExperiences = experiences
        ? [...experiences].sort((a, b) => a.number - b.number)
        : [];
      return { loading, error, experiences: sortedExperiences };
    }

    const { loading, error, experiences } = useFetchExperiences();
    return (
        <div>
            {loading ? <LoadingBox></LoadingBox>
                :
                error ? <MessageBox variant="danger">{error}</MessageBox>
                    :
                    <div className="Home fadein" onLoad={() => playAudio(cardOpenAudio, 0.05)}>
                        <div className="col-2">
                            <div className="row center bottomline">
                                <div className="title">EXPERIENCE</div>
                            </div>
                            {/*Idea: have left right buttons be invisible over left and right cards in order to move them left or right upon click */}
                            <CarouselProvider
                                className="carousel"
                                totalSlides={8}>

                                <Slider
                                    classNameAnimation="slider"
                                    classNameTray="tray8"
                                >
                                    <div className="row center">
                                        {
                                            experiences.map((experience) => (
                                                <Slide
                                                    // className="slide" 

                                                    index={experience.number}
                                                >
                                                    <Experience key={experience._id} experience={experience}></Experience>
                                                </Slide>
                                            ))
                                        }
                                    </div>
                                </Slider>
                                <ButtonBack className="buttonBack" onMouseUp={() => playAudio(cardHoverAudio, 1)}>
                                    <img src="/images/right_arrow.png" alt="<"></img>
                                </ButtonBack>
                                <ButtonNext className="buttonNext" onMouseUp={() => playAudio(cardHoverAudio, 1)}>
                                    <img src="/images/right_arrow.png" alt=">"></img>
                                </ButtonNext>
                            </CarouselProvider>
                        </div>
                    </div>
            }

        </div>
    );
}