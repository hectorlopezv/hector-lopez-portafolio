import { useMemo, useState } from "react";
import personalIcon from "../../assets/moebius-triangle.png";
import carrerIcon from "../../assets/triple-corn.png";
import educationIcon from "../../assets/upgrade.png";
import AboutMenuItem from "./AboutMenuItem";
import subheadingsData from "./AboutMenuSubHeadingData";
import "./aboutMenu.css";
import AboutMenuSubHeading from "./AboutMenuSubHeading";
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
  const menuItem = ["PERSONAL", "EDUCATION", "CARRER"];
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
            key={index}
            content={item.content}
            title={item.title}
            active={activeMenuItem === index + 1}
            onClick={() => handleSubHeadingClick(index + 1)}
            menuItem={activeMenuItem}
          />
        ))}
      </div>
    </>
  );
}
