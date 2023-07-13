import avatarImage from "../../assets/avatar_hector.webp";
import "./avatar.css";
type Props = {
  page: string;
};
export default function Avatar({ page }: Props) {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;
  return (
    <>
      <span className={spanClass}></span>
      <img src={avatarImage} alt="avatar image" className={avatarClass} />
    </>
  );
}
