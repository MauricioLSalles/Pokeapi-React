import { useContext, useEffect, useRef, useState } from "react";
import type { Pokemon } from "../../Types/Pokemon";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonList.css";
import type { PokemonListsResponse } from "../../Types/PokemonListsResponse";
import ApiGet from "../../CustomHooks/ApiGet";
import { PokeListContext } from "../../CustomHooks/CreateContext";

type Props = React.HTMLAttributes<HTMLDivElement>;

function PokemonList(props: Props) {
  const offset = useRef<number>(0)
  const loader = useRef(null);
  const [loading, setLoading] = useState<boolean>(true);
  const listContext = useContext(PokeListContext);

  async function loadList(list: PokemonListsResponse) {
    for (let i = 0; i < list.results.length; i++) {
      const pokeResult = await ApiGet<Pokemon>(list.results[i].url)
      if (pokeResult.data !== null && listContext)
        listContext.loadedList.current[pokeResult.data.id] = pokeResult.data
    }
    listContext?.setList(listContext.loadedList.current)
    console.log(listContext?.list);
    setLoading(false);
  }


  async function addPokemons() {
    const res = await ApiGet<PokemonListsResponse>(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset.current}`);
    if (res.data)
      loadList(res.data);
  }

  console.log("render");
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && listContext?.inputRef.current?.value === "") {
        setLoading(true);
        addPokemons();
        offset.current += 10
      }
    }
      , { threshold: 0 });
    if (loader.current) {
      observer.observe(loader.current);
    }
    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  return (<>
    <div {...props} className="PokemonList">
      {
        listContext?.list.map((pokemon, id) => (
          <PokemonCard
            key={id}
            number={pokemon.id.toString()}
            name={pokemon.name}
            labels={pokemon.types}
            imgSrc={pokemon.sprites.front_default}
          />
        ))
      }
    </div>
    <div ref={loader}>{loading ? "loading..." : ""}</div>
  </>
  );
}

export default PokemonList;
