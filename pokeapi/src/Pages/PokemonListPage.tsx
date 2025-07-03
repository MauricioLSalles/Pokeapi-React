
import { useRef, useState } from "react";
import Navbar from "../Organisms/Header/Navbar";
import PokemonList from "../Organisms/PokemonList/PokemonList";
import SearchSection from "../Organisms/SearchSection/SearchSection";
import Layout from '../templates/Layout';
import type { Link } from "../Types/Link";
import type { Pokemon } from "../Types/Pokemon";
import { PokeListContext } from "../CustomHooks/CreateContext";


export default function PokemonListPage() {

  const [searchParam, setSearchParam] = useState<string>("");
  const [list, setList] = useState<Pokemon[]>([]);
  const loadedList = useRef<Pokemon[]>([]);



  const links: Link[] = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "Types",
      link: "types",
    },
    {
      name: "Generations",
      link: "generations",
    },
  ];
  return (
    <div>
      <PokeListContext.Provider value={{ loadedList, list, setList, searchParam, setSearchParam }}>
        <Layout 
        header={<Navbar links={links}/>} 
        secondHeader={<SearchSection/>} 
        content={<PokemonList />}/>
      </PokeListContext.Provider>
    </div>
  )
}
