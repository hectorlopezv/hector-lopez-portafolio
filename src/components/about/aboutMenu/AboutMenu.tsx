import { useMemo, useState } from "react";
import personalIcon from "../../../assets/moebius-triangle.webp";
import carrerIcon from "../../../assets/triple-corn.webp";
import educationIcon from "../../../assets/upgrade.webp";
import AboutMenuItem from "./AboutMenuItem";
import subheadingsData from "./AboutMenuSubHeadingData";
import "./aboutMenu.css";
import AboutMenuSubHeading from "./AboutMenuSubHeading";
const menuItem = ["PERSONAL", "EDUCATION", "CARRER"];
export default function AboutMenu() {
  const [activeMenuItem, setActiveMenuItem] = useState(1);
  const [activeSubHeading, setActiveSubHeading] = useState(1);

  const handleMenuItemClick = (menuItem: number) => {
    setActiveMenuItem(menuItem);
    setActiveSubHeading(1);
  };
  const handleSubHeadingClick = (subHeading: number) => {
    setActiveSubHeading(subHeading);
  };

  const activeMenuTitle = menuItem[activeMenuItem - 1];
  const activeMenuIcon = useMemo(() => {
    let icon = personalIcon;
    if (activeMenuTitle === "EDUCATION") {
      icon = educationIcon;
    }
    if (activeMenuTitle === "CARRER") {
      icon = carrerIcon;
    }
    return icon;
  }, [activeMenuTitle]);
  const subheadings = subheadingsData[activeMenuItem];
  return (
    <>
      <div className="menu">
        {menuItem.map((item, index) => (
          <AboutMenuItem
            key={index}
            title={item}
            active={activeMenuItem === index + 1}
            onClick={() => handleMenuItemClick(index + 1)}
          />
        ))}
      </div>

      <div className="sub-container">
        <div className="icon-title-container">
          <img src={activeMenuIcon} alt={activeMenuTitle} />
          <h3>{activeMenuTitle}</h3>
        </div>
        {subheadings.map((item, index) => (
          <AboutMenuSubHeading
            activeMenuTitle={activeMenuTitle}
            key={index}
            content={item.content}
            title={item.title}
            active={activeSubHeading === index + 1}
            onClick={() => handleSubHeadingClick(index + 1)}
            menuItem={activeSubHeading}
          />
        ))}
      </div>
    </>
  );
}
