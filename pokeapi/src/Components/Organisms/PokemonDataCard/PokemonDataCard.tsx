import { type ReactElement } from "react";
import { DataNavbar } from "../../Molecules/DataNavbar/DataNavbar";
import { Outlet } from "react-router";
import "./pokemonDataCard.css";

/**
 * @description Card that display the differents types of info about a pokemon
 */
export function PokemonDataCard(): ReactElement {
  return (
    <>
      <DataNavbar />
      <div className="pokemonDataCard text-normal">
        <Outlet />
      </div>
    </>
  );
}
