import type { Link } from "../../Types/Link";

type CustomProps = {
  links: Link[];
};

type Props = CustomProps & React.ButtonHTMLAttributes<HTMLUListElement>;

export default function HeaderLinks(props: Props) {
  const { links, ...ElementProps } = props;
  return (
    <ul
      style={{ display: "flex", gap: "3vw", alignItems: "center" }}
      {...ElementProps}
    >
      {links.map((link: Link, id: number) => (
        <span key={id} style={{ fontSize: "1.3rem" }}>
          {link.name}
        </span>
      ))}
    </ul>
  );
}
