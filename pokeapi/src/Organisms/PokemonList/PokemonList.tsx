import {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
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
  const offset = useRef<number>(0);
  const partialOffset = useRef<number>(25);
  const loader = useRef<null | HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const listContext = useContext(PokeListContext);

  const updateListContext = useCallback(
    async (responses: Response<Pokemon>[]) => {
      responses.forEach((pokeResult) => {
        if (pokeResult.data !== null && listContext) {
          listContext.loadedList.current[pokeResult.data.id] = pokeResult.data;
        }
      });
      listContext?.setList(listContext.loadedList.current);
      setLoading(false);
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
    Promise.all(createRequestList()).then((responses) => {
      updateListContext(responses);
      offset.current += partialOffset.current;
    });
  }, [createRequestList, updateListContext]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          listContext?.inputRef.current?.value === ""
        ) {
          setLoading(true);
          loadList();
        }
      },
      { threshold: 0 }
    );
    if (loader.current) {
      observer.observe(loader.current);
    }
    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
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
      <div className="loadMorePokemons" style={{ height: 1 }} ref={loader}>
        {loading ? <LoadingScreen /> : " "}
      </div>
    </>
  );
}

export default PokemonList;
