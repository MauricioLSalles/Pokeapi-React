type link = {
    link:string,
    name:string,
}

type CustomProps = {
  links: link[],
};

type Props = CustomProps & React.ButtonHTMLAttributes<HTMLDivElement>;

export default function HeaderLinks(props:Props) {
  const {links, ...ElementProps} = props;
  return (
    <div {...ElementProps}>
        {links.map((link:link) => 
            <span>{link.name}</span>
        )}
    </div>
  )
}
