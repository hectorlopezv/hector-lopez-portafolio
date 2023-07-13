import classNames from "classnames";
import { useState } from "react";
import "./projects.css";
import ProjectsMap from "./Project";
import projects from "./projectsData";
export default function ProjectsMenu() {
  const [activeProject, setActiveMenu] = useState(1);

  const handleProjectClick = (menuItem: number) => {
    setActiveMenu(menuItem);
  };
  const projectItems = [
    "Messenger Clone",
    "Reddit Clone",
    "Airbnb",
    "Ecomerce",
    "Admin Dashboard",
    "Store Market",
  ];
  return (
    <div className="project-menu">
      <div className="project-items-container">
        {projectItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleProjectClick(index + 1)}
            className={classNames("project-item", {
              activateProject: activeProject === index + 1,
            })}
          >
            <h2 className="title">{item}</h2>
          </div>
        ))}
      </div>
      <div className="project-sub-container">
        <ProjectsMap projects={[projects[activeProject]]} />
      </div>
    </div>
  );
}
