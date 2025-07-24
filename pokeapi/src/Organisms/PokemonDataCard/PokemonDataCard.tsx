import { type ReactElement } from "react";
import { DataNavbar } from "../../Molecules/DataNavbar/DataNavbar";
import { Outlet } from "react-router";
import "./pokemonDataCard.css";

/**
 * @description Card that display the differents types of info about a pokemon
 */
export function PokemonDataCard(): ReactElement {
  return (
    <div>
      <DataNavbar />
      <div className="pokemonDataCard">
        <Outlet />
      </div>
    </div>
  );
}
