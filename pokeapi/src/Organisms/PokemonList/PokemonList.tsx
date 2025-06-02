import PokemonCard from "../PokemonCard/PokemonCard";
import './PokemonList.css';

function PokemonList() {
    const data = ["","","",""]
  return (
    <div className="PokemonList">
        {
            data.map( (pokemon,id) => <PokemonCard key={id} number={"001"} name={"bulbasor"} labels={[]} imgSrc={""}/> )
        }
    </div>
  )
}

export default PokemonList