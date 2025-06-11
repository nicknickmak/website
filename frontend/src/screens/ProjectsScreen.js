import React, { useEffect } from 'react';
import Project from '../components/Project';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import cardHoverAudio from '../audio/cardHover.mp3';
import cardOpenAudio from '../audio/cardOpen.mp3';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProjects } from '../actions/projectActions';
import { playAudio } from '../utils/audioUtils';

import './carousel.css';

export default function ProjectsScreen() {
    function useProjects() {
      const dispatch = useDispatch();
      const projectList = useSelector((state) => state.projectList);
      const { loading, error, projects } = projectList;
      useEffect(() => {
        dispatch(listProjects());
      }, [dispatch]);
      // Sort projects by number before returning
      const sortedProjects = projects
        ? [...projects].sort((a, b) => a.number - b.number)
        : [];
      return { loading, error, projects: sortedProjects };
    }

    const { loading, error, projects } = useProjects();
    return (
      <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div
            className="Home fadein"
            onLoad={() => playAudio(cardOpenAudio, 0.1)}
          >
            <div className="col-2">
              <div className="row center bottomline">
                <div className="title">PROJECTS</div>
              </div>

              {/*Idea: have left right buttons be invisible over left and right cards in order to move them left or right upon click */}
              <CarouselProvider
                className="carousel"
                // currentSlide='0'
                totalSlides={7}
              >
                <Slider classNameAnimation="slider" classNameTray="tray6">
                  <div className="row center">
                    {projects.map((project) => (
                      <Slide
                        // className="slide"

                        index={project.number}
                      >
                        <Project key={project._id} project={project}></Project>
                      </Slide>
                    ))}
                  </div>
                </Slider>
                <ButtonBack
                  className="buttonBack"
                  onMouseUp={() => playAudio(cardHoverAudio, 1)}
                >
                  <img src="/images/right_arrow.png" alt="<"></img>
                </ButtonBack>
                <ButtonNext
                  className="buttonNext"
                  onMouseUp={() => playAudio(cardHoverAudio, 1)}
                >
                  <img src="/images/right_arrow.png" alt=">"></img>
                </ButtonNext>
              </CarouselProvider>
            </div>
          </div>
        )}
      </div>
    );
}