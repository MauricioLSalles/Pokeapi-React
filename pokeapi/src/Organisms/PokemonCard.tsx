import './Style/PokemonCard.css'
import CardDescription from "../Molecules/CardDescription"


function PokemonCard() {
  return (
    <div className="PokemonCard">
        <div className='PokemonCard-description'>
            <CardDescription/>
        </div>
    </div>
  )
}

export default PokemonCard