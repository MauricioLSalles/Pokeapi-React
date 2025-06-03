import LoadPokemonsHook from "../../CustomHooks/LoadPokemonsHook";
import PokemonCard from "../PokemonCard/PokemonCard";
import './PokemonList.css';

function PokemonList() {

    const pokeList = LoadPokemonsHook();
  return (
    <div className="PokemonList">
        {
            pokeList.map( (pokemon,id) => <PokemonCard key={id} number={pokemon.number} name={pokemon.name} labels={pokemon.types} imgSrc={pokemon.imgSrc}/> )
        }
    </div>
  )
}

export default PokemonList