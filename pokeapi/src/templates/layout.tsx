import Navbar from "../Organisms/Header/Navbar";
import PokemonList from "../Organisms/PokemonList/PokemonList";
import SearchSection from "../Organisms/SearchSection/SearchSection";
import type { Link } from "../Types/Link";
import "./layout.css";

function Layout() {
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
      <header className="header">
        <Navbar links={links} />
      </header>
      <div className="secondHeader">
        <SearchSection />
      </div>
      <section className="content">
        <PokemonList />
      </section>
      <footer className="footer"></footer>
    </div>
  );
}

export default Layout;
