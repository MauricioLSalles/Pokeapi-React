import {
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ChangeEvent,
  type ReactElement,
} from "react";
import type { Pokemon } from "../../Types/Pokemon";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonList.css";
import ApiGet from "../../CustomHooks/ApiGet";
import { PokeListContext } from "../../CustomHooks/CreateContext";
import type { Response } from "../../Types/Response";
import InputField from "../../Molecules/InputField/InputField";
import LoadingScreen from "../../Molecules/LoadingScreen/LoadingScreen";

type Props = React.HTMLAttributes<HTMLUListElement>;

function PokemonList(props: Props): ReactElement {
  const offset = useRef<number>(1);
  const partialOffset = useRef<number>(25);
  const listContext = useContext(PokeListContext);

  const updateListContext = useCallback(
    (responses: Response<Pokemon>[]) => {
      if (!listContext) {
        return;
      }
      responses.forEach((pokeResult) => {
        if (pokeResult.data !== null && listContext) {
          listContext.loadedList.current[pokeResult.data.id - 1] =
            pokeResult.data;
        }
      });
      listContext.setList([...listContext.loadedList.current]);
    },
    [listContext]
  );

  const createRequestList = useCallback(() => {
    const requestList = [];
    for (
      let i = offset.current;
      i < offset.current + partialOffset.current;
      i++
    ) {
      requestList.push(
        ApiGet<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      );
    }
    return requestList;
  }, []);

  const loadList = useCallback(async (): Promise<void> => {
    const responses: Response<Pokemon>[] =
      await Promise.all(createRequestList());
    updateListContext(responses);
  }, [createRequestList, updateListContext]);

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

  function changePartialOffset(event: ChangeEvent<HTMLInputElement>) {
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
        {listContext?.list.map((pokemon, id) => (
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
