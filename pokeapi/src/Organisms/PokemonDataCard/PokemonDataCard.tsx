import { type ReactElement } from "react";
import { DataNavbar } from "../../Molecules/DataNavbar/DataNavbar";
import { Outlet } from "react-router";

/**
 * @description Card that display the differents types of info about a pokemon
 */
export function PokemonDataCard(): ReactElement {
  return (
    <div>
      <DataNavbar />
      <Outlet />
    </div>
  );
}
