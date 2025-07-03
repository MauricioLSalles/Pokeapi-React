import { useContext, useEffect, useState } from "react";
import UseGet from "../../CustomHooks/UseGet";
import type { Pokemon } from "../../Types/Pokemon";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonList.css";
import type { PokemonListsResponse } from "../../Types/PokemonListsResponse";
import ApiGet from "../../CustomHooks/ApiGet";
import { PokeListContext } from "../../CustomHooks/CreateContext";

type Props = React.HTMLAttributes<HTMLDivElement>;

function PokemonList(props: Props) {
  const listContext = useContext(PokeListContext);
  const {data, error} = UseGet<PokemonListsResponse>("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");
  const [loading, setLoading] = useState(false);

  async function loadList(list:PokemonListsResponse ) {
    for (let i = 0; i < list.results.length; i++) {
      const pokeResult = await ApiGet<Pokemon>(list.results[i].url)
      if(pokeResult.data !== null && listContext)
        listContext.loadedList.current[i] = pokeResult.data
    }

    setLoading(false);
    listContext?.setList(listContext.loadedList.current)
  }

  useEffect(() => {
    if(data === null) return;
    loadList(data);
  },[data])

  if(loading) return <div>Loading...</div>;

  if(error) return <div>error loading list</div>

  return (
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
  );
}

export default PokemonList;
