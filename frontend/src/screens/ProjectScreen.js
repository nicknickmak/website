import CardDetails from "../components/CardDetails";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useIsMobile } from "../utils/useIsMobile";
import data from "../data";

export default function ProjectScreen(props) {
  // TODO: Setup Redux store and actions
  //   const dispatch = useDispatch();
  //   const projectId = props.match.params.id;
  //   const projectDetails = useSelector((state) => state.projectDetails);
  //   const { loading, error, project } = projectDetails;

  //   useEffect(() => {
  //     dispatch(detailsProject(projectId));
  //   }, [dispatch, projectId]);

  const projectId = props.match.params.id; // Replace with Redux state when implemented
  const project = data.projects.find(
    // Replace with Redux state when implemented
    (project) => project._id === projectId
  );
  const loading = false; // Replace with Redux state when implemented
  const error = null; // Replace with Redux state when implemented

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
