import { ReactNode } from "react";

interface ISubheadingData {
  title: string;
  content: ReactNode;
}
const subheadingsData: {
  [key: number]: ISubheadingData[];
} = {
  1: [
    {
      title: "About Me",
      content: (
        <>
          <p
            style={{
              lineHeight: "25px",
              paddingRight: "5px",
              paddingLeft: "4px",
            }}
          >
            I am a Full Stack Developer with expertise in React, Next, Node,
            express, nest, go, spring boot, GCP, AWS, and more, My experience
            includes building and deploying scalable applications on cloud
            platforms such as GCP and AWS. I have a deep understanding of cloud
            computing technologies, including serverless computing,
            containerization, and microservices architecture.
          </p>
        </>
      ),
    },
  ],
  2: [
    {
      title: "2019 Electronics Engineering, Universidad Del Norte",
      content: (
        <>
          <p
            style={{
              lineHeight: "25px",
              paddingRight: "5px",
              paddingLeft: "4px",
            }}
          >
            Electronics engineering is concerned with the uses of the
            electromagnetic spectrum and the application of electronic devices
            such as integrated circuits and transistors. It deals with "light
            current" applications such as telephone and radio communication,
            computers, radar, and automatic control systems.
          </p>
        </>
      ),
    },
    {
      title: "2020 Full Stack Developer BootCamp, Holberton School",
      content: (
        <>
          <p
            style={{
              lineHeight: "25px",
              paddingRight: "5px",
              paddingLeft: "4px",
            }}
          >
            Holberton School trains Developers in a peer learning and
            project-based methodology, with a curriculum that includes
            Fundamentals of Computer Science and Software Development, including
            Linux, Data Structure, Algorithms, Low Level Programming, High Level
            Programming, Databases, APIs and DevOps, whats more they focus also
            on developing the necessary soft skills for a interview and a
            successful carrer.
          </p>
        </>
      ),
    },
  ],
  3: [
    {
      title: "Nov 2022 - Jul 2023, Senior FullStack Developer, Avio Consulting",
      content: (
        <>
          <p
            style={{
              lineHeight: "25px",
              paddingRight: "5px",
              paddingLeft: "4px",
            }}
          >
            Throughout my time as a Developer at AVIO consulting I had the
            opportunity to be part of the following. Implemented the following
            features: Store operations that include closing, opening store, cash
            in, cash out, safe drop, no sale, open and closing drawers, closing
            and opening registers, closing and review of ongoing transactions,
            authentication and roles with authorization, Credit card payment,
            cash payments, tips, refunds, Manager overrides. Contributed to the
            development in a large scale POS system collaboratively working with
            cross-functional teams to ensure the application met the needs of
            Customers. Guarantee the support of the POS system, solving bugs and
            fixes to improve performance of the application
          </p>
        </>
      ),
    },
    {
      title: "Jul 2022 - Dec 2022, Software Engineer, Epam Systems",
      content: (
        <>
          <p
            style={{
              lineHeight: "25px",
              paddingRight: "5px",
              paddingLeft: "4px",
            }}
          >
            Integration with AWS amplify and frontend application with React,
            Antd, Graphql and Ramda Collaborate with a multifunctional team to
            develop a Web application for a community in charge of registering
            and updating the status of an animal for their subsequent
            management. Developed a style guide using consistent naming
            conventions to improve code readability, implemented unit tests and
            used code filters to improve code quality with Ramda. Developed the
            UI of Animeal and integrated with AWS services such as Amplify,
            authentication, authorization, 2 way authentication, SMS
            verification with Cognito, Internationalization with AWS Amplify for
            english, russian and georgian as supported languages, which allowed
            users to register, update and view the status of the animals in real
            time in a map. Implemented lazy loading and code splitting to
            improve website performance, added ARIA attributes and keyboard
            navigation to improve site accessibility and implemented input
            validation to improve website security.
          </p>
        </>
      ),
    },
    {
      title: "Mar 2022 - Jul 2022, Senior Frontend Developer, Zemoga",
      content: (
        <>
          <p
            style={{
              lineHeight: "25px",
              paddingRight: "5px",
              paddingLeft: "4px",
            }}
          >
            Throughout my time as a Developer at Zemoga I had the opportunity to
            be part of the following. Guarantee the support of the Checkout
            section in E-Commerce, solving bugs and making fixes in a monorepo
            of more than 100 active developers. Implemented accessibility
            features and adhered to WCAG 2.1 guidelines, making web applications
            accessible to users with disabilities and ensuring compliance with
            industry standards and regulations. Plan with the TL and leaders the
            business rules and functional and non-functional rules of the Order
            Tracker feature and subsequent development from scratch. Developed
            and planned the Order Tracker in 4 sprints, with tests and
            documentation of the components through storybook, unit testing and
            e2e, when the time initially allocated was 6-8 sprints, presenting
            an optimization of 50%. Created reusable micro components for
            different teams and E-commerce pages used in react, react query,
            tachyons, graphql, unit testing with react testing library and e2e
            with testcafe. Create documentation to facilitate onboarding of new
            colleagues, reducing average time from 3 sprints to 1-2 sprints.
          </p>
        </>
      ),
    },
    {
      title: "Dec 2020 - Feb 2022, Web UI Ssr, Globant",
      content: (
        <>
          <p
            style={{
              lineHeight: "25px",
              paddingRight: "5px",
              paddingLeft: "4px",
            }}
          >
            I have been on different accounts throughout my time as a Developer
            at Globant obtaining the following achievements. Approve and
            estimate the time of the frontend team's tasks with the client's POs
            and the TL. Carry out the accompaniment and mentoring for the
            frontend team, validating and testing the solutions of my
            colleagues, thus developing high quality software. Contribute to the
            development of a large-scale, complex web application in react for a
            healthcare provider, working collaboratively with cross-functional
            teams to ensure the application met the needs of healthcare
            professionals and patients. Created a versioned component library,
            hosted on github registry to avoid code duplication. Made the
            migration of the architecture from class components to functional
            components, using flux architecture in 2 sprints. Refactoring of the
            codebase in 1 sprint time, going from React class component(16) to
            React functional component(17) updating from MUI4 to MUI 5 jest24 to
            jest27, giving the possibility of using the latest trends in the
            frontend ecosystem.
          </p>
        </>
      ),
    },
  ],
};

export default subheadingsData;
