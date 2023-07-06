import classNames from "classnames";
import { ReactNode } from "react";

export default function AboutMenuSubHeading({
  title,
  active,
  onClick,
  content,
  menuItem,
}: {
  title: string;
  active: boolean;
  onClick: () => void;
  content: ReactNode;
  menuItem: string | number;
}) {
  const subContainerClass = `sub-container-${menuItem}`;
  return (
    <div
      className={classNames(subContainerClass, { "active-subheading": active })}
    >
      <h3 className="title" onClick={onClick}>
        {title}
      </h3>
      <div className="p-container">{content}</div>
    </div>
  );
}
