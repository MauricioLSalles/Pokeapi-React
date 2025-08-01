import { NavLink } from "react-router-dom";
import type { Link } from "../../../Types/Link";
import "./HeaderLinks.css";

type CustomProps = {
  links: Link[];
};

type Props = CustomProps & React.ButtonHTMLAttributes<HTMLDivElement>;

export default function HeaderLinks(props: Props) {
  const { links, ...ElementProps } = props;
  return (
    <div className="HeaderLinks text-large" {...ElementProps}>
      {links.map((link: Link, id: number) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? "HeaderLink HeaderLink-active" : "HeaderLink"
          }
          to={link.link}
          key={id}
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}
