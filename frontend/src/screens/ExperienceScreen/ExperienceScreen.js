import CardDetails from "../../components/CardDetails";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import { useIsMobile } from "../../utils/useIsMobile";
import data from "../../data";

export default function ExperienceScreen(props) {
  // TODO: Setup Redux store and actions
  //   const dispatch = useDispatch();
  //   const experienceId = props.match.params.id;
  //   const experienceDetails = useSelector((state) => state.experienceDetails);
  //   const { loading, error, experience } = experienceDetails;

  //   useEffect(() => {
  //     dispatch(detailsExperience(experienceId));
  //   }, [dispatch, experienceId]);

  const experienceId = props.match.params.id; // Replace with Redux state when implemented
  const experience = data.experiences.find(
    // Replace with Redux state when implemented
    (experience) => experience._id === experienceId
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
        <CardDetails cardDetails={experience} isMobile={isMobile} />
      )}
    </div>
  );
}
