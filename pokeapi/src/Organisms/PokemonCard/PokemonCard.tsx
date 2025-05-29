import './PokemonCard.css'
import CardDescription from "../../Molecules/CardDescription/CardDescription"
import MultipleLabels from '../../Molecules/MultipleLabels/MultipleLabels'


function PokemonCard({number,name,labels, imgSrc}:{number:string,name:string,labels:string[],imgSrc:string}) {
  return (
    <div className="PokemonCard">
      <div>
        <div className='PokemonCard-description'>
            <CardDescription number={number} name={name}/>
        </div>
        <MultipleLabels labels={labels}/>
      </div>
      <img src={imgSrc} className='PokemonCard-image'/>

    </div>
  )
}

export default PokemonCard