
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Element } from "react-scroll";

const Projects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page with hash
    navigate("/#projects");
  }, [navigate]);

  return <Element name="projects">Redirecting...</Element>;
};

export default Projects;
