import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardDetails from "../../components/CardDetails";
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
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <CardDetails cardDetails={experience} isMobile={isMobile} />
      )}
    </div>
  );
}
