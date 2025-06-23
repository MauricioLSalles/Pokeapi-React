import type { Link } from "../../Types/Link";

type CustomProps = {
  links: Link[],
};

type Props = CustomProps & React.ButtonHTMLAttributes<HTMLDivElement>;

export default function HeaderLinks(props: Props) {
  const { links, ...ElementProps } = props;
  return (
    <div {...ElementProps}>
      {links.map((link: Link) =>
        <span>{link.name}</span>
      )}
    </div>
  )
}
