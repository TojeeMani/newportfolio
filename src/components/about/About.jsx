import "./about.css";
import Me from "../../img/tojee.png";
import { ThemeContext } from "../context";
import { useContext } from "react";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const skills = {
    languages: ["JavaScript", "PHP", "JSX", "HTML", "CSS"],
    frameworks: ["React.js", "R", "Node.js", "Python", "Django"],
    libraries: [
      "Tailwind", "Zustand", "React-router", "Stripe",
      "Bootstrap", "Material UI", "SCSS", "Unit test"
    ],
    cloud: ["AWS-Lambda", "AWS-Cognito"],
    devTools: ["Visual Studio code", "Git", "Gitlab", "React-dev tools"],
    backendAndApi: ["REST API", "Authentication (OAuth)", "API Integration"],
    databases: ["MongoDB", "MySQL"]
  };

  const skillLabels = {
    languages: "Languages",
    frameworks: "Frameworks",
    libraries: "Libraries",
    backendAndApi: "Backend and API",
    cloud: "Cloud",
    devTools: "Dev Tools",
    databases: "Databases"
  };

  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-desc">
          A highly skilled software professional with a focus on delivering robust React applications. Proven ability to create dynamic and responsive web interfaces, ensuring seamless user experiences. Committed to team collaboration and adaptability, showcasing expertise in JavaScript, HTML, and CSS.
        </p>

        <div style={{ marginTop: "15px" }}>
          <h1 className="a-title">Skills</h1>
          <p className="a-desc">
            <ul style={{ color: darkMode ? "#9f8ed7" : "#333" }}>
              {Object.keys(skillLabels).map((key) => (
                <li key={key}>
                  <strong>{skillLabels[key]}:</strong> {skills[key].join(", ")}
                </li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
