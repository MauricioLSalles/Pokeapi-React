import { useContext, useRef, type ReactElement } from "react";
import "./InputSearch.css";
import { PokeListContext } from "../../CustomHooks/CreateContext";

type Props = React.HtmlHTMLAttributes<HTMLDivElement>;

export default function InputSearch(props: Props): ReactElement {
  const { className, ...ElementProps } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const pokeListContext = useContext(PokeListContext);

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter")
      pokeListContext?.setSearchParam(inputRef.current?.value ?? "")
  }

  return (
    <div className={`${className} inputSearch`} {...ElementProps}>
      <img src="/icons/searchIcon.png" width={20} height={20} alt="" />
      <input onKeyUp={handleKeyPress} ref={inputRef} id="search" placeholder="What Pokémon are you looking for?" />
    </div>
  );
}
