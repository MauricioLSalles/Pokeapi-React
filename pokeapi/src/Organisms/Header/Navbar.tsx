import HeaderTitle from "../../Atoms/HeaderTitle/HeaderTitle";
import HeaderLinks from "../../Molecules/HeaderLinks/HeaderLinks";
import type { Link } from "../../Types/Link";
import "./Navbar.css";

const links: Link[] = [
  {
    name: "Games",
    link: "games",
  },
  {
    name: "Langs",
    link: "langs",
  },
  {
    name: "Pokedex",
    link: "pokedex",
  },
];

type Props = React.ButtonHTMLAttributes<HTMLDivElement>;

export default function Navbar(props: Props) {
  const { className, ...ElementProps } = props;
  const classname = className ?? "";
  return (
    <div className={`${classname} navbar`} {...ElementProps}>
      <HeaderTitle text="Pokedex" />
      <HeaderLinks links={links} />
    </div>
  );
}
