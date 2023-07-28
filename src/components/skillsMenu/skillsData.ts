export interface SkillData {
  title: string;
  level: number;
}
export interface ISkillsData {
  [key: number]: {
    title: string;
    level: number;
  }[];
}
const skills: ISkillsData = {
  1: [
    {
      title: "Css / Sass / Html",
      level: 5,
    },
    {
      title: "JavaScript / TypeScript",
      level: 5,
    },
    {
      title: "Redux / Zustand",
      level: 5,
    },
    {
      title: "Tailwind CSS / Bootstrap",
      level: 5,
    },
    {
      title: "React / Next",
      level: 6,
    },
    {
      title: "MUI / Shadcn / Ant Design",
      level: 4,
    },
    {
      title: "Jest / RTL / Cypress",
      level: 4,
    },
  ],
  2: [
    { title: "Auth / Authorization", level: 3 },
    {
      title: "Auth0 / Passport / JWT",
      level: 3,
    },
    {
      title: "Python / Go / Java",
      level: 2,
    },
    {
      title: "Prisma / TypeORM",
      level: 4,
    },
    {
      title: "Docker / Kubernetes",
      level: 2,
    },
    {
      title: "Git / Github / Gitlab",
      level: 4,
    },
    {
      title: "GraphQL / REST",
      level: 4,
    },
    {
      title: "Mongodb / Postgresql",
      level: 3,
    },
    {
      title: "Node / Express / Nest",
      level: 4,
    },
  ],
  3: [
    {
      title: "AWS / GCP / Azure",
      level: 2,
    },
    {
      title: "Microservices / Monolith",
      level: 2,
    },
    {
      title: "Asensible / Terraform",
      level: 1,
    },
    {
      title: "CI / CD",
      level: 1,
    },
    {
      title: "Kafka / RabbitMQ",
      level: 1,
    },
    {
      title: "Redis / Memcached",
      level: 1,
    },
    {
      title: "Elasticsearch / Kibana",
      level: 1,
    },
    {
      title: "Prometheus / Grafana",
      level: 1,
    },
  ],
};

export default skills;
