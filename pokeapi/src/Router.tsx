import { type ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorScreen from "./Components/Organisms/ErrorScreen/ErrorScreen";
import { pokemonLoader } from "./Loaders/PokemonLoader";
import { PokemonGameLoader } from "./Loaders/PokemonGameLoader";
import { PokemonDataInfo } from "./Components/Organisms/PokemonDataInfo/PokemonDataInfo";
import { PokemonStatsDetails } from "./Components/Organisms/PokemonStatsDetails/PokemonStatsDetails";
import { PokemonEvolutionDetails } from "./Components/Organisms/PokemonEvolutionDetails/PokemonEvolutionDetails";

const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      const { MainPage } = await import("./Components/Pages/MainPage/MainPage");
      return { Component: MainPage };
    },
    errorElement: (
      <ErrorScreen fullScreen={true} error="Error loading the page" />
    ),
    children: [
      {
        index: true,
        path: "/pokedex",
        async lazy() {
          const { PokemonListPage } = await import(
            "./Components/Pages/PokemonListPage/PokemonListPage"
          );
          return { Component: PokemonListPage };
        },
        errorElement: (
          <ErrorScreen fullScreen={true} error="Error loading the page" />
        ),
      },
      {
        path: "games",
        loader: PokemonGameLoader,
        async lazy() {
          const { PokemonGame } = await import(
            "./Components/Pages/PokemonGame/PokemonGame"
          );
          return { Component: PokemonGame };
        },
        errorElement: (
          <ErrorScreen fullScreen={true} error="Error loading the page" />
        ),
      },
      {
        path: "pokemon/:id",
        loader: pokemonLoader,
        async lazy() {
          const { PokemonInfoPage } = await import(
            "./Components/Pages/PokemonInfoPage/PokemonInfoPage"
          );
          return { Component: PokemonInfoPage };
        },
        errorElement: (
          <ErrorScreen fullScreen={true} error="Error loading the page" />
        ),
        children: [
          {
            path: "PokedexData",
            element: <PokemonDataInfo />,
            errorElement: (
              <ErrorScreen fullScreen={true} error="Error loading the page" />
            ),
          },
          {
            path: "Stats",
            element: <PokemonStatsDetails />,
            errorElement: (
              <ErrorScreen fullScreen={true} error="Error loading the page" />
            ),
          },
          {
            path: "Evolution",
            element: <PokemonEvolutionDetails />,
            errorElement: (
              <ErrorScreen fullScreen={true} error="Error loading the page" />
            ),
          },
        ],
      },
      {
        path: "*",
        element: (
          <ErrorScreen fullScreen={true} error="This page doesnt exist" />
        ),
      },
    ],
  },
]);
export default function Router(): ReactElement {
  return <RouterProvider router={router} />;
}
