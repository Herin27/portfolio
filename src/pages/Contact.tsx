
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Element } from "react-scroll";

const Contact = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page with hash
    navigate("/#contact");
  }, [navigate]);

  return <Element name="contact">Redirecting...</Element>;
};

export default Contact;
