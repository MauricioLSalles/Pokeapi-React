import type { Link } from "../../Types/Link";

type CustomProps = {
  links: Link[],
};

type Props = CustomProps & React.ButtonHTMLAttributes<HTMLDivElement>;

export default function HeaderLinks(props: Props) {
  const { links, ...ElementProps } = props;
  return (
    <div style={{ display: 'flex', gap: '12px' }} {...ElementProps}>
      {links.map((link: Link) =>
        <span style={{ fontSize: '1.3rem' }}>{link.name}</span>
      )}
    </div>
  )
}
