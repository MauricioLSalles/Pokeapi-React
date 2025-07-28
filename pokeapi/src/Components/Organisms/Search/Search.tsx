import { type ReactElement } from "react";
import "./Search.css";
import InputSearch from "../../Atoms/InputSearch/InputSearch";

type Props = React.HtmlHTMLAttributes<HTMLDivElement>;

export default function Search(props: Props): ReactElement {
  return (
    <div className="Search" {...props}>
      <InputSearch />
      <span className="searchInfo">
        Search for Pokémon by name or using the National Pokédex number.
      </span>
    </div>
  );
}
