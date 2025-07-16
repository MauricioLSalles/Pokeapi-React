import { StrictMode } from "react";
import "./App.css";
import "./Layout.css";
import Router from "./Router";
import Navbar from "./Organisms/Header/Navbar";
import type { Link } from "./Types/Link";
function App() {
  const links: Link[] = [
    {
      name: "Games",
      link: "games",
    },
    {
      name: "Langs",
      link: "langs",
    },
    {
      name: "Pokedex",
      link: "pokedex",
    },
  ];
  return (
    <StrictMode>
      <Navbar className="header" links={links} />
      <div className="content">
        <Router />{" "}
      </div>
    </StrictMode>
  );
}

export default App;
