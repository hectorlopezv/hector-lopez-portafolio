import { Link, useLocation } from "react-router-dom";
import deadeyer from "../../assets/dead-eye.png";
import "./navbar.css";
export default function Nav() {
  const location = useLocation();
  const getNavPositionClass: Record<string, string> = {
    "/": "nav-about",
    "/skills": "nav-skills",
    "/project": "nav-project",
    "/contact": "nav-contact",
  };

  const getPageTitle: Record<string, string> = {
    "/": "About",
    "/skills": "Skills",
    "/project": "Project",
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
    <nav className={`nav ${navPositionClass}`}>
      {renderNavLink({
        to: "/",
        imageSrc: deadeyer,
        altText: "astronaut helmet icon",
        navClass: "nav-about",
      })}
    </nav>
  );
}
