import { useEffect, useState } from 'react'
import PokemonCard from './Organisms/PokemonCard/PokemonCard'

function App() {

  const [number, setNumner] = useState("");
  const [name, setName] = useState("");
  const [labels, setLabels] = useState(["grass", "poison"]);
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
     loadPokemon();
  }, [])

  async function loadPokemon() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const json = await res.json();
    setName(json.name);
    setNumner(json.id);
    setImgSrc(json.sprites.back_default)
    console.log(json);
  }
  

  return (
    <>
      <PokemonCard number={number} name={name} labels={labels} imgSrc={imgSrc}/>
    </>
  )
}

export default App


