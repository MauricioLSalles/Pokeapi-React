import './PokemonCard.css'
import CardDescription from "../../Molecules/CardDescription/CardDescription"
import MultipleLabels from '../../Molecules/MultipleLabels/MultipleLabels'


function PokemonCard({number,name,labels, imgSrc}:{number:string,name:string,labels:any[],imgSrc:string}) {
  return (
    <div className="PokemonCard">
      <img className='PokemonCardDots' src='/backgrounds/Pattern.png'/>
      <div className='PokemonCard-description'>
          <CardDescription number={number} name={name}/>
          <MultipleLabels labels={labels}/>
      </div>
      <img src={imgSrc} className='PokemonCard-image'/>
    </div>
  )
}

export default PokemonCard