import { useEffect, useState } from "react";

function LoadPokemonsHook(){
    
    const [number, setNumner] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [labels, setLabels] = useState<any>([]);
    const [imgSrc, setImgSrc] = useState<string>("");

    async function loadPokemon() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const json = await res.json();
    setName(json.name);
    setNumner(json.id);
    setImgSrc(json.sprites.back_default)
    setLabels(json.types)
    console.log(json.types);
  }

    useEffect(() => {
         loadPokemon();
      }, [])

    return {number,name,labels,imgSrc};
}

export default LoadPokemonsHook;