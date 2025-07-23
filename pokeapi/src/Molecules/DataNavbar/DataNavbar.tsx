import { useState, type ReactElement } from "react";
import { NavLink } from "react-router-dom";
import "./DataNavbar.css";

export function DataNavbar(): ReactElement {
  const [currentlySelected, setCurrentlySelected] = useState<number>(0);
  function getClassName(position: number) {
    if (currentlySelected === position) {
      return "pokemonNavbar-active";
    } else {
      return "";
    }
  }
  return (
    <ul className="pokemonNavbar">
      <NavLink
        onClick={() => setCurrentlySelected(0)}
        className={getClassName(0)}
        to={"PokedexData"}
      >
        Pokedex Data
      </NavLink>
      <NavLink
        onClick={() => setCurrentlySelected(1)}
        className={getClassName(1)}
        to={"Stats"}
      >
        Stats
      </NavLink>
      <NavLink
        onClick={() => setCurrentlySelected(2)}
        className={getClassName(2)}
        to={"Evolution"}
      >
        Evolution
      </NavLink>
    </ul>
  );
}
