import { useContext, type ReactElement } from "react";
import "./InputSearch.css";
import { PokeListContext } from "../../CustomHooks/CreateContext";

type Props = React.HtmlHTMLAttributes<HTMLDivElement>;

export default function InputSearch(props: Props): ReactElement {
  const { className, ...ElementProps } = props;
  const pokeListContext = useContext(PokeListContext);

  function search() {
    pokeListContext?.setList(pokeListContext.loadedList.current.filter(pokemon => pokemon.name.includes(pokeListContext.inputRef.current?.value ?? "")));
  }


  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter")
      search();
  }

  return (
    <div className={`${className} inputSearch`} {...ElementProps}>
      <img src="/icons/searchIcon.png" width={20} height={20} alt="" />
      <input onKeyUp={handleKeyPress} ref={pokeListContext?.inputRef} id="search" placeholder="What Pokémon are you looking for?" />
    </div>
  );
}
