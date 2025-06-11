import { useEffect } from "react";
import SpecialButton from "../../components/SpecialButton";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import { detailsExperience } from "../../actions/experienceActions";
import "./card-details.css";
import { useIsMobile } from "../../utils/useIsMobile";

export default function ExperienceScreen(props) {
  const dispatch = useDispatch();
  const experienceId = props.match.params.id;
  const experienceDetails = useSelector((state) => state.experienceDetails);
  const { loading, error, experience } = experienceDetails;

  useEffect(() => {
    dispatch(detailsExperience(experienceId));
  }, [dispatch, experienceId]);

  const isMobile = useIsMobile();

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className={`notHome ${isMobile ? "mobile" : ""}`}>
          <div className="col-1">
            <div className="imageCard">
              <div className="imageCover">
                <h1>{experience.name}</h1>
                <p>{experience.date}</p>
              </div>
              <img src={experience.image} alt={experience.name}></img>
            </div>
          </div>
          <div className="">
            <ul>
              <li>
                <h1>{experience.role}</h1>
              </li>
              <li>{experience.tech}</li>
              <br></br>
              <li>
                Description:
                <p>{experience.description}</p>
              </li>
            </ul>
            <br></br>
          </div>

          <SpecialButton purpose={experience}></SpecialButton>
        </div>
      )}
    </div>
  );
}
