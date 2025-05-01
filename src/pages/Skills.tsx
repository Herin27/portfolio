
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Element } from "react-scroll";

const Skills = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page with hash
    navigate("/#skills");
  }, [navigate]);

  return <Element name="skills">Redirecting...</Element>;
};

export default Skills;
