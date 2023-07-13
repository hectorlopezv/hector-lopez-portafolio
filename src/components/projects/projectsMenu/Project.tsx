import { IProject } from "./projectsData";

type Props = {
  projects: IProject[];
};
export default function ProjectsMap({ projects }: Props) {
  return projects.map((project, index) => (
    <div key={index} className={`project-sub-container-${index + 1}`}>
      <h3>{project.title}</h3>
      <img src={project.image} alt={project.title} loading="eager"></img>
      <p className="project-sub-container-description">{project.description}</p>
      <div className="link-container">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          GITHUB
        </a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          DEMO
        </a>
      </div>
    </div>
  ));
}
