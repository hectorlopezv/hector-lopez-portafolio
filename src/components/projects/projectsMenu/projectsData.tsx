import { ReactNode } from "react";
import MessengerImage from "../../../assets/projects/images/messenger.png";
import RedditImage from "../../../assets/projects/images/reddit.png";
import AirbnbImage from "../../../assets/projects/images/airbnb.png";
import ServerActions from "../../../assets/projects/images/serveractions.png";
import Admin from "../../../assets/projects/images/admin.png";
import Store from "../../../assets/projects/images/store.png";
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
    title: "Messenger Clone",
    image: MessengerImage,
    description: (
      <>
        <p>
          Messenger clone build on Next.js 13, React, Typescript, Zustand,
          Tailwind, Prisma, MongoDB, NextAuth, Pusher, cloudinary, and more.
        </p>
      </>
    ),
    github:
      "https://github.com/hectorlopezv/Real-Time-Messenger-Clone-Next.js-13-React-Tailwind-Prisma-MongoDB-NextAuth-Pusher",
    demo: "https://real-time-messenger-clone-next-js-13-react-tailwin-hectorlopezv.vercel.app",
  },
  2: {
    title: "Reddit Clone",
    image: RedditImage,
    description: (
      <>
        <p>
          Reddit clone build on Next.js 13, React, Typescript, Zustand,
          Tailwind, Prisma, cloudinary, upstash redis, MySql, NextAuth, and
          more,
        </p>
      </>
    ),
    github:
      "https://github.com/hectorlopezv/Fullstack-Reddit-Clone-Next.js-13-React-Tailwind-Auth-Prisma-MySQL-upstash-redis",
    demo: "https://fullstack-reddit-clone-next-js-13-react-git-3e5c75-hectorlopezv.vercel.app",
  },
  3: {
    title: "Airbnb Clone",
    image: AirbnbImage,
    description: (
      <>
        <p>
          Airbnb clone build on Next.js 13, React, Typescript, Zustand,
          Tailwind, Prisma, cloudinary, and more.
        </p>
      </>
    ),
    github:
      "https://github.com/hectorlopezv/fullstack-airbnb-next13-prisma-tailwind-mongodb-nextauth",
    demo: "https://fullstack-airbnb-next13-prisma-tailwind-mongodb-nextauth.vercel.app",
  },
  4: {
    title: "Ecommerce",
    image: ServerActions,
    description: (
      <>
        <p>
          Ecommerce, Next.js 13, React, Typescript, DaisyUI, mongodb, nextAuth,
          Prisma, pagination, server actions, searching/filtering, and more.
        </p>
      </>
    ),
    github:
      "https://github.com/hectorlopezv/next13-server-actions-ecommerce-prisma--daisyui-server-actions-pagination-next-auth-cache-revalitdat",
    demo: "https://next13-server-actions-ecommerce-prisma-git-277bf9-hectorlopezv.vercel.app/",
  },
  5: {
    title: "Admin Dashboard",
    image: Admin,
    description: (
      <>
        <p>
          Admin Dashboard, Next.js 13, React, Typescript, Shadcn, Zustand,
          Tailwind, Prisma, Mysql, Clerk, Pusher, cloudinary, Stripe, Recharts
          and more.
        </p>
      </>
    ),
    github:
      "https://github.com/hectorlopezv/fullstack-eccomerce-next13-tailwind-prisma-mysql",
    demo: "https://fullstack-eccomerce-next13-tailwind-prisma-mysql.vercel.app/",
  },
  6: {
    title: "Store Market",
    image: Store,
    description: (
      <>
        <p>
          Store Market, Next.js 13, React, Typescript, Zustand, Tailwind, and
          more.
        </p>
      </>
    ),
    github:
      "https://github.com/hectorlopezv/fullstack-eccomerce-next13-tailwind-prisma-mysql-store",
    demo: "https://fullstack-eccomerce-next13-tailwind-prisma-mysql-store.vercel.app/",
  },
};

export default projects;
