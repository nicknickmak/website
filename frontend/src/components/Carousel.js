import { useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { playAudio } from "../utils/audioUtils";
import cardHoverAudio from "../audio/cardHover.mp3";
import cardOpenAudio from "../audio/cardOpen.mp3";
import Experience from "./Experience";

/**
 * Carousel component that displays a collection of items in a slider format.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.title - The title displayed above the carousel.
 * @param {boolean} props.isLoading - Indicates if the carousel is currently loading.
 * @param {string} props.error - Error message to display if an error occurs.
 * @param {Array} props.items - Array of items to display in the carousel.
 * @returns {JSX.Element} The rendered Carousel component.
 */
export default function Carousel({ title, isLoading, error, items }) {
  useEffect(() => {
    playAudio(cardOpenAudio, 0.5);
  }, []);

  if (!items || !Array.isArray(items) || items.length === 0) {
    return null;
  }
  const totalItems = items.length;

  return (
    <div>
      {isLoading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="Home fadein">
          <div className="col-2">
            <div className="row center bottomline">
              <div className="title">{title}</div>
            </div>
            <CarouselProvider className="carousel" totalSlides={totalItems}>
              <Slider
                classNameAnimation="slider"
                classNameTray={`tray${totalItems}`}
              >
                <div className="row center">
                  {items.map((item, idx) => (
                    <Slide index={item.number} key={item.number || idx}>
                      <Experience experience={item} />
                    </Slide>
                  ))}
                </div>
              </Slider>
              <ButtonBack
                className="buttonBack"
                onMouseUp={() => playAudio(cardHoverAudio, 1)}
              >
                <img src="/images/right_arrow.png" alt="<" />
              </ButtonBack>
              <ButtonNext
                className="buttonNext"
                onMouseUp={() => playAudio(cardHoverAudio, 1)}
              >
                <img src="/images/right_arrow.png" alt=">" />
              </ButtonNext>
            </CarouselProvider>
          </div>
        </div>
      )}
    </div>
  );
}
