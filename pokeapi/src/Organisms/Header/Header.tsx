import HeaderTitle from "../../Atoms/HeaderTitle/HeaderTitle";
import HeaderLinks from "../../Molecules/HeaderLinks/HeaderLinks";
import type { Link } from "../../Types/Link";

type CustomProps = {
  links: Link[],
};

type Props = CustomProps & React.ButtonHTMLAttributes<HTMLDivElement>;

export default function Header(props: Props) {
  const { links, ...ElementProps } = props;
  return (
    <div {...ElementProps}>
      <HeaderTitle text="Pokedex" />
      <HeaderLinks links={links} />
    </div>
  )
}
