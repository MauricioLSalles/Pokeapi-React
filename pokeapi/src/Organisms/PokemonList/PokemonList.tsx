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
import type { PokemonListsResponse } from "../../Types/PokemonListsResponse";
import ApiGet from "../../CustomHooks/ApiGet";
import { PokeListContext } from "../../CustomHooks/CreateContext";
import type { Response } from "../../Types/Response";
import InputField from "../../Molecules/InputField/InputField";
import LoadingScreen from "../../Molecules/LoadingScreen/LoadingScreen";
import ErrorScreen from "../ErrorScreen/ErrorScreen";

type Props = React.HTMLAttributes<HTMLUListElement>;

function PokemonList(props: Props): ReactElement {
  const offset = useRef<number>(0);
  const partialOffset = useRef<number>(25);
  const loader = useRef<null | HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const listContext = useContext(PokeListContext);

  const loadList = useCallback(
    async (list: PokemonListsResponse): Promise<void> => {
      const responses = await Promise.all(
        list.results.map((listItem) => ApiGet<Pokemon>(listItem.url))
      );
      responses.forEach((pokeResult) => {
        if (pokeResult.data !== null && listContext)
          listContext.loadedList.current[pokeResult.data.id] = pokeResult.data;
      });
      listContext?.setList(listContext.loadedList.current);
      console.log(listContext?.list);
      setLoading(false);
    },
    [listContext]
  );

  const addPokemons = useCallback(async (): Promise<void> => {
    const res: Response<PokemonListsResponse> =
      await ApiGet<PokemonListsResponse>(
        `https://pokeapi.co/api/v2/pokemon?limit=${partialOffset.current}&offset=${offset.current}`
      );
    if (!res.error && res.data) {
      loadList(res.data);
      offset.current = offset.current + partialOffset.current;
    } else {
      setError(false);
    }
  }, [loadList]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          listContext?.inputRef.current?.value === ""
        ) {
          setLoading(true);
          addPokemons();
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
  }, [addPokemons, listContext, listContext?.inputRef]);

  function changePartialOffset(event: ChangeEvent<HTMLInputElement>) {
    partialOffset.current = Number(event.target.value);
  }

  if (error) {
    return <ErrorScreen error="the pokemons could not be loaded" />;
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
