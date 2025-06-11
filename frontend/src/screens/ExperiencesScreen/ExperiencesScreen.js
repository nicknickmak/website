import { useEffect } from "react";
import Carousel from "../../components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { listExperiences } from "../../actions/experienceActions";

import "../carousel.css";
import data from "../../data";

export default function ExperiencesScreen() {
  function useFetchExperiences() {
    // TODO setup Redux store and actions
    // const dispatch = useDispatch();
    // const experienceList = useSelector((state) => state.experienceList);
    // const { isLoading, error, experiences } = experienceList;
    // useEffect(() => {
    //   dispatch(listExperiences());
    // }, [dispatch]);
    // Sort experiences by number, ascending
    const experiences = data.experiences; // Replace with Redux state when implemented
    const isLoading = false; // Replace with Redux state when implemented
    const error = null; // Replace with Redux state when implemented

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
      typeName="experience"
    />
  );
}
