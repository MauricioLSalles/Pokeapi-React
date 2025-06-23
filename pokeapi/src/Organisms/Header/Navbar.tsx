import HeaderTitle from "../../Atoms/HeaderTitle/HeaderTitle";
import HeaderLinks from "../../Molecules/HeaderLinks/HeaderLinks";
import type { Link } from "../../Types/Link";
import './Navbar.css'

type CustomProps = {
  links: Link[],
};

type Props = CustomProps & React.ButtonHTMLAttributes<HTMLDivElement>;

export default function Navbar(props: Props) {
  const { links, className, ...ElementProps } = props;
  const classname = className ?? "";
  return (
    <div className={`${classname} header`} {...ElementProps}>
      <HeaderTitle text="Pokedex" />
      <HeaderLinks links={links} />
    </div>
  )
}
