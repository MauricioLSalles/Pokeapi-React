import { type ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorScreen from "./Organisms/ErrorScreen/ErrorScreen";
import { pokemonLoader } from "./Loaders/PokemonLoader";
import { PokemonGameLoader } from "./Loaders/PokemonGameLoader";
import { PokemonDataInfo } from "./Organisms/PokemonDataInfo/PokemonDataInfo";
import { PokemonStatsDetails } from "./Organisms/PokemonStatsDetails/PokemonStatsDetails";
import { PokemonEvolutionDetails } from "./Organisms/PokemonEvolutionDetails/PokemonEvolutionDetails";

const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      const { HomePage } = await import("./Pages/HomePage");
      return { Component: HomePage };
    },
    children: [
      {
        index: true,
        path: "/pokedex",
        async lazy() {
          const { PokemonListPage } = await import("./Pages/PokemonListPage");
          return { Component: PokemonListPage };
        },
      },
      {
        path: "games",
        loader: PokemonGameLoader,
        async lazy() {
          const { PokemonGame } = await import("./Pages/PokemonGame");
          return { Component: PokemonGame };
        },
      },
      {
        path: "pokemon/:id",
        loader: pokemonLoader,
        async lazy() {
          const { PokemonInfoPage } = await import(
            "./Pages/PokemonInfoPage/PokemonInfoPage"
          );
          return { Component: PokemonInfoPage };
        },
        errorElement: (
          <ErrorScreen fullScreen={true} error="this page doesnt exist" />
        ),
        children: [
          {
            path: "PokedexData",
            element: <PokemonDataInfo />,
          },
          {
            path: "Stats",
            element: <PokemonStatsDetails />,
          },
          {
            path: "Evolution",
            element: <PokemonEvolutionDetails />,
          },
        ],
      },
      {
        path: "*",
        element: (
          <ErrorScreen fullScreen={true} error="this page doesnt exist" />
        ),
      },
    ],
  },
]);
export default function Router(): ReactElement {
  return <RouterProvider router={router} />;
}
