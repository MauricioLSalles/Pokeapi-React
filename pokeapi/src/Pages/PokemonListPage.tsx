
import Navbar from "../Organisms/Header/Navbar";
import PokemonList from "../Organisms/PokemonList/PokemonList";
import SearchSection from "../Organisms/SearchSection/SearchSection";
import Layout from '../templates/Layout';
import type { Link } from "../Types/Link";


export default function PokemonListPage() {
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
    <div><Layout header={<Navbar links={links}/>} secondHeader={<SearchSection/>} content={<PokemonList/>}/></div>
  )
}
