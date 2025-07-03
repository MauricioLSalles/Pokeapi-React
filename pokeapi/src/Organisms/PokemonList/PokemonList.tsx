import { useEffect, useRef, useState } from "react";
import UseGet from "../../CustomHooks/UseGet";
import type { Pokemon } from "../../Types/Pokemon";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonList.css";
import type { PokemonListsResponse } from "../../Types/PokemonListsResponse";
import ApiGet from "../../CustomHooks/ApiGet";

type Props = React.HTMLAttributes<HTMLDivElement>;

function PokemonList(props: Props) {
  const {error, data} = UseGet<PokemonListsResponse>("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<Pokemon[]>([]);
  const pokeData = useRef<Pokemon[]>([]);

  async function loadList(list:PokemonListsResponse ) {
    for (let i = 0; i < list.results.length; i++) {
    const pokeResult = await ApiGet<Pokemon>(list.results[i].url)
    if(pokeResult.data !== null)
      pokeData.current.push(pokeResult.data)
    }
    setLoading(false);
    setList(pokeData.current)

  }

  useEffect(() => {
    if(data === null) return;
    loadList(data);
  },[data])

  console.log(list);

  if(loading) return <div>Loading...</div>;

  return (
    <div {...props} className="PokemonList">
      {
        list.map((pokemon, id) => (
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
