import PokemonCard from './Organisms/PokemonCard/PokemonCard'
import LoadPokemonsHook from './CustomHooks/LoadPokemonsHook';

function App() {

  const {number,name,labels,imgSrc} = LoadPokemonsHook();
 

  return (
    <>
      <PokemonCard number={number} name={name} labels={labels} imgSrc={imgSrc}/>
    </>
  )
}

export default App


