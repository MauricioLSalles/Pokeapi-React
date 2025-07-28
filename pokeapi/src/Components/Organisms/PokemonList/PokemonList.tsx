import {
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ChangeEvent,
  type ReactElement,
} from "react";
import type { SimplifiedPokemon } from "../../../Types/Pokemon";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonList.css";
import {
  PokeListContext,
  type ListContext,
} from "../../../CustomHooks/CreateContext";
import InputField from "../../Molecules/InputField/InputField";
import LoadingScreen from "../../Molecules/LoadingScreen/LoadingScreen";
import CacheApiGetSimplifiedPokemons from "../../../CustomHooks/CacheApiGetSimplifiedPokemons";

type Props = React.HTMLAttributes<HTMLUListElement>;

function PokemonList(props: Props): ReactElement {
  const offset = useRef<number>(1);
  const partialOffset = useRef<number>(25);
  const listContext: ListContext | null = useContext(PokeListContext);

  /**
   * Updates the total list of the pokemons with the partial list loaded from the API. It uses the list suplied by the context
   */
  const updateListContext = useCallback(
    (responses: SimplifiedPokemon[]): void => {
      if (!listContext) {
        return;
      }
      responses.forEach((pokeResult) => {
        if (pokeResult !== null && listContext) {
          listContext.loadedList.current[pokeResult.id - 1] = pokeResult;
        }
      });
      listContext.setVisibleList([...listContext.loadedList.current]);
    },
    [listContext]
  );

  /**
   * Create a list of fetchs to the PokeAPI to load the pokemons equal to the number selected by the user
   */
  const createRequestList = useCallback((): Promise<SimplifiedPokemon>[] => {
    const requestList = [];
    for (
      let i = offset.current;
      i < offset.current + partialOffset.current;
      i++
    ) {
      requestList.push(
        CacheApiGetSimplifiedPokemons(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      );
    }
    return requestList;
  }, []);

  /**
   * Fetches the data and update the list
   */
  const loadList = useCallback(async (): Promise<void> => {
    const responses: SimplifiedPokemon[] =
      await Promise.all(createRequestList());
    updateListContext(responses);
  }, [createRequestList, updateListContext]);

  //Sets an observer to check if the user reached the bottom of the page
  useEffect(() => {
    const loader = document.getElementsByClassName("loadingContainer")[0];
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          listContext?.inputRef.current?.value === ""
        ) {
          loadList().then(() => (offset.current += partialOffset.current));
        }
      },
      { threshold: 0 }
    );
    if (loader) {
      observer.observe(loader);
    }
    return () => {
      if (loader) {
        observer.unobserve(loader);
      }
    };
  }, [listContext, listContext?.inputRef, loadList]);

  function changePartialOffset(event: ChangeEvent<HTMLInputElement>): void {
    partialOffset.current = Number(event.target.value);
  }

  return (
    <>
      <InputField
        title="change the offset:"
        inputProps={{
          placeholder: "25",
          className: "text-normal PokemonListOffset",
          id: "offset",
          type: "number",
          onChange: changePartialOffset,
        }}
        props={{
          className: "PokemonListOffsetContainer",
        }}
      />
      <ul {...props} className="PokemonList">
        {listContext?.visibleList.map((pokemon, id) => (
          <PokemonCard
            key={id}
            number={pokemon.id.toString()}
            name={pokemon.name}
            labels={pokemon.types}
            imgSrc={pokemon.sprites.front_default}
          />
        ))}
      </ul>
      <LoadingScreen />
    </>
  );
}

export default PokemonList;
