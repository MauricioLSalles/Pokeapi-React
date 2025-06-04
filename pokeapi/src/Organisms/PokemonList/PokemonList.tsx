import LoadPokemonsHook from "../../CustomHooks/LoadPokemonsHook";
import type { Pokemon } from "../../Types/Pokemon";
import PokemonCard from "../PokemonCard/PokemonCard";
import './PokemonList.css';

function PokemonList() {

    const { data, loading }: { data: Pokemon[]|undefined; loading: boolean } = LoadPokemonsHook();
   
    return (
    <div className="PokemonList">
        {
          loading
            ? <div>Loading...</div>
        : data?.map((pokemon, id) => (
            <PokemonCard
              key={id}
              number={pokemon.number}
              name={pokemon.name}
              labels={pokemon.types}
              imgSrc={pokemon.imgSrc}
            />
          ))
        }
    </div>
  )
}

export default PokemonList