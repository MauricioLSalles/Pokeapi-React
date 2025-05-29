import PokemonCard from './Organisms/PokemonCard/PokemonCard'

function App() {

  return (
    <>
      <PokemonCard number={"001"} name={"Bulbasor"} labels={["grass", "poison"]} imgSrc={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png'}/>
    </>
  )
}

export default App
