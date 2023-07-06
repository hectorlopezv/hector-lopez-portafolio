import { ReactNode } from "react";
import projectOne from "../../../assets/project-1.png";
import projectTwo from "../../../assets/project-2.png";
import projectThree from "../../../assets/project-3.png";
export interface IProject {
  title: string;
  image: string;
  description: ReactNode;
  github: string;
  demo: string;
}
export interface IProjects {
  [key: number]: IProject;
}
const projects: IProjects = {
  1: {
    title: "SoMe Platform",
    image: projectOne,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
  2: {
    title: "Productivity App",
    image: projectTwo,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
  3: {
    title: "Food Delivery App",
    image: projectThree,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
};

export default projects;
