import { Link, useLocation } from "react-router-dom";
import astrountalHelmet from "../../assets/astronaut-helmet.webp";
import deadeyer from "../../assets/dead-eye.webp";
import envelope from "../../assets/envelope.webp";
import stack from "../../assets/stack.webp";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./navbar.css";
export default function Nav() {
  const location = useLocation();
  const getNavPositionClass: Record<string, string> = {
    "/": "nav-about",
    "/skills": "nav-skills",
    "/projects": "nav-projects",
    "/contact": "nav-contact",
  };

  const getPageTitle: Record<string, string> = {
    "/": "About",
    "/skills": "Skills",
    "/projects": "Projects",
    "/contact": "Contact",
  };

  const navPositionClass = getNavPositionClass[location.pathname] ?? "";
  const pageTitle = getPageTitle[location.pathname] ?? "";

  const isCurrentPageFn = (path: string) => path === navPositionClass;

  const renderNavLink = ({
    to,
    imageSrc,
    altText,
    navClass,
  }: {
    to: string;
    imageSrc: string;
    altText: string;
    navClass: string;
  }) => {
    const isCurrentPage = isCurrentPageFn(navClass);
    const linkClass = isCurrentPage ? "nav-link current" : "nav-link";
    return (
      <Link to={to} className={linkClass}>
        <img src={imageSrc} alt={altText} />
        {isCurrentPage ? <h1 className="page-title">{pageTitle}</h1> : null}
      </Link>
    );
  };

  return (
    <div>
      <nav className={`nav ${navPositionClass}`}>
        {renderNavLink({
          to: "/",
          imageSrc: astrountalHelmet,
          altText: "astronaut helmet icon",
          navClass: "nav-about",
        })}
        {renderNavLink({
          to: "/skills",
          imageSrc: deadeyer,
          altText: "deadeyer icon",
          navClass: "nav-skills",
        })}
        {renderNavLink({
          to: "/projects",
          imageSrc: stack,
          altText: "stack icon",
          navClass: "nav-projects",
        })}
        {renderNavLink({
          to: "/contact",
          imageSrc: envelope,
          altText: "envelop icon",
          navClass: "nav-contact",
        })}
      </nav>
      <div className="flex ">
        <a
          href="https://www.linkedin.com/in/hectorviniciolopezmolinares-fullstackdeveloper"
          target="_blank"
          className="text-white"
        >
          <BsLinkedin size={26} />
        </a>
        <a
          href="https://github.com/hectorlopezv"
          target="_blank"
          className="text-white"
        >
          <BsGithub size={26} />
        </a>
      </div>
    </div>
  );
}
