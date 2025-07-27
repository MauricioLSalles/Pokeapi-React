import { type ReactElement } from "react";
import { NavLink } from "react-router-dom";
import "./DataNavbar.css";

export function DataNavbar(): ReactElement {
  return (
    <ul className="pokemonNavbar">
      <NavLink
        className={({ isActive }) => (isActive ? "pokemonNavbar-active" : "")}
        to={"PokedexData"}
      >
        Pokedex Data
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "pokemonNavbar-active" : "")}
        to={"stats"}
      >
        Stats
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "pokemonNavbar-active" : "")}
        to={"evolution"}
      >
        Evolution
      </NavLink>
    </ul>
  );
}
