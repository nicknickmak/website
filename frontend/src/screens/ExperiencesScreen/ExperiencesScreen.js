import { useEffect } from "react";
import Carousel from "../../components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { listExperiences } from "../../actions/experienceActions";

import "../carousel.css";

export default function ExperiencesScreen() {
  function useFetchExperiences() {
    const dispatch = useDispatch();
    const experienceList = useSelector((state) => state.experienceList);
    const { isLoading, error, experiences } = experienceList;
    useEffect(() => {
      dispatch(listExperiences());
    }, [dispatch]);
    // Sort experiences by number, ascending
    const sortedExperiences = experiences
      ? [...experiences].sort((a, b) => a.number - b.number)
      : [];
    return { isLoading, error, experiences: sortedExperiences };
  }

  const { isLoading, error, experiences } = useFetchExperiences();

  return (
    <Carousel
      title="Experiences"
      isLoading={isLoading}
      error={error}
      items={experiences}
    />
  );
}
