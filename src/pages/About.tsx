
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Element } from "react-scroll";

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page with hash
    navigate("/#about");
  }, [navigate]);

  return <Element name="about">Redirecting...</Element>;
};

export default About;
