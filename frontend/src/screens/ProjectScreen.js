import { useEffect } from "react";
import SpecialButton from "../components/SpecialButton";

import loadin1Audio from "../audio/loadin1.mp3";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { detailsProject } from "../actions/projectActions";

var loadin1 = new Audio();

loadin1.src = loadin1Audio;
loadin1.volume = 0.5;

export default function ProjectScreen(props) {
  const dispatch = useDispatch();
  const projectId = props.match.params.id;
  const projectDetails = useSelector((state) => state.projectDetails);
  const { loading, error, project } = projectDetails;

  useEffect(() => {
    dispatch(detailsProject(projectId));
  }, [dispatch, projectId]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="notHome">
          <div className="col-1 fadein" onLoad={() => loadin1.play()}>
            <div className="row top">
              <div className="col-1">
                <div className="imageCard">
                  <div className="imageCover">
                    <h1>{project.name}</h1>
                    <p>{project.date}</p>
                  </div>
                  <img
                    className="large"
                    src={project.image}
                    alt={project.name}
                  ></img>
                </div>
              </div>
              <div className="col-1">
                <ul>
                  <li>
                    <h1>{project.name}</h1>
                  </li>
                  <li>{project.tech}</li>
                  <br></br>
                  <li>
                    Description:
                    <p>{project.description}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row center">
              <SpecialButton purpose={project}></SpecialButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
