import { useEffect } from "react";
import Carousel from "../components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { listProjects } from "../actions/projectActions";

import "./carousel.css";

export default function ProjectsScreen() {
  function useFetchProjects() {
    const dispatch = useDispatch();
    const projectList = useSelector((state) => state.projectList);
    const { isLoading, error, projects } = projectList;
    useEffect(() => {
      dispatch(listProjects());
    }, [dispatch]);
    // Sort projects by number before returning
    const sortedProjects = projects
      ? [...projects].sort((a, b) => a.number - b.number)
      : [];
    return { isLoading, error, projects: sortedProjects };
  }

  const { isLoading, error, projects } = useFetchProjects();

  return (
    <Carousel
      title="Projects"
      isLoading={isLoading}
      error={error}
      items={projects}
    />
  );
}
