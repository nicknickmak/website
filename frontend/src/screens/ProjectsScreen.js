import Carousel from "../components/Carousel";

import "./carousel.css";
import data from "../data";

export default function ProjectsScreen() {
  function useFetchProjects() {
    // TODO setup Redux store and actions
    // const dispatch = useDispatch();
    // const projectList = useSelector((state) => state.projectList);
    // const { isLoading, error, projects } = projectList;
    // useEffect(() => {
    //   dispatch(listProjects());
    // }, [dispatch]);
    // Sort projects by number before returning

    const projects = data.projects; // Replace with Redux state when implemented
    const isLoading = false; // Replace with Redux state when implemented
    const error = null; // Replace with Redux state when implemented

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
      typeName="project"
    />
  );
}
