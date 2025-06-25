import { type ReactElement } from "react";
import "./InputSearch.css";

type Props = React.HtmlHTMLAttributes<HTMLDivElement>;

export default function InputSearch(props: Props): ReactElement {
  const { className, ...ElementProps } = props;
  return (
    <div className={`${className} inputSearch`} {...ElementProps}>
      <img src="/icons/searchIcon.png" width={20} height={20} alt="" />
      <input id="search" placeholder="What Pokémon are you looking for?" />
    </div>
  );
}
