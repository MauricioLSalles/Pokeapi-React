import {
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

type Props = React.HTMLAttributes<HTMLUListElement>;

function PokemonList(props: Props): ReactElement {
  const offset = useRef<number>(0);
  const partialOffset = useRef<number>(25);
  const loader = useRef<null | HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const listContext = useContext(PokeListContext);

  useEffect(() => {
    async function loadList(list: PokemonListsResponse): Promise<void> {
      for (let i = 0; i < list.results.length; i++) {
        const pokeResult: Response<Pokemon> = await ApiGet<Pokemon>(
          list.results[i].url
        );
        if (pokeResult.data !== null && listContext)
          listContext.loadedList.current[pokeResult.data.id] = pokeResult.data;
      }
      listContext?.setList(listContext.loadedList.current);
      console.log(listContext?.list);
      setLoading(false);
    }

    async function addPokemons(oldOffset: number): Promise<void> {
      const res: Response<PokemonListsResponse> =
        await ApiGet<PokemonListsResponse>(
          `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset.current}`
        );
      if (res.data) loadList(res.data);
      offset.current = oldOffset + partialOffset.current;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          listContext?.inputRef.current?.value === ""
        ) {
          setLoading(true);
          addPokemons(offset.current);
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
  }, [listContext, listContext?.inputRef]);

  function changePartialOffset(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
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
      {!loading && listContext?.list.length === 0 ? (
        <div>pokemon not found</div>
      ) : (
        <></>
      )}
      <div style={{ height: 1 }} ref={loader}>
        {loading ? "loading..." : " "}
      </div>
    </>
  );
}

export default PokemonList;
