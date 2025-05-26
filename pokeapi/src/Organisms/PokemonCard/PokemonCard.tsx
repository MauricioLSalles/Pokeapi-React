import './PokemonCard.css'
import CardDescription from "../../Molecules/CardDescription/CardDescription"
import MultipleLabels from '../../Molecules/MultipleLabels/MultipleLabels'


function PokemonCard() {
  return (
    <div className="PokemonCard">
      <div>
        <div className='PokemonCard-description'>
            <CardDescription/>
        </div>
        <MultipleLabels labels={["grass", "poison"]}/>
      </div>
      <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png' className='PokemonCard-image'/>

    </div>
  )
}

export default PokemonCard