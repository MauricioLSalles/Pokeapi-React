import './Style/PokemonCard.css'
import CardDescription from "../Molecules/CardDescription/CardDescription"
import MultipleLabels from '../Molecules/MultipleLabels/MultipleLabels'


function PokemonCard() {
  return (
    <div className="PokemonCard">
        <div className='PokemonCard-description'>
            <CardDescription/>
            <MultipleLabels labels={["grass", "poison"]}/>
        </div>
    </div>
  )
}

export default PokemonCard