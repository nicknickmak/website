import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardDetails from "../components/CardDetails";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { detailsProject } from "../actions/projectActions";
import { useIsMobile } from "../utils/useIsMobile";

export default function ProjectScreen(props) {
  const dispatch = useDispatch();
  const projectId = props.match.params.id;
  const projectDetails = useSelector((state) => state.projectDetails);
  const { loading, error, project } = projectDetails;

  useEffect(() => {
    dispatch(detailsProject(projectId));
  }, [dispatch, projectId]);

  const isMobile = useIsMobile();

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <CardDetails cardDetails={project} isMobile={isMobile} />
      )}
    </div>
  );
}
