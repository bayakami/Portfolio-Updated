import "./projectList.css";
import Project from "../project/Project";
import { projects } from "../../data";

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Some of my latest projects</h1>
        <p className="pl-desc">
          I worked on these while studying with <a href="https://thedeveloperacademy.com/" target="_blank" rel="noreferrer">The Developer Academy</a>
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} desc={item.desc} title={item.title}/>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
