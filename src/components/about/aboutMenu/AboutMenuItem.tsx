import classNames from "classnames";

export default function AboutMenuItem({
  title,
  active,
  onClick,
}: {
  title: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div className={classNames("item", { active })} onClick={onClick}>
      <h2 className="title">{title}</h2>
    </div>
  );
}
