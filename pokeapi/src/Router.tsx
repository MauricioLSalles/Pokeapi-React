import { type ReactElement } from "react";
import PokemonGame from "./Pages/PokemonGame";
import PokemonListPage from "./Pages/PokemonListPage";
import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorScreen from "./Organisms/ErrorScreen/ErrorScreen";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/pokedex",
        Component: PokemonListPage,
      },
      {
        path: "/games",
        Component: PokemonGame,
      },
    ],
    errorElement: (
      <ErrorScreen fullScreen={true} error="this page doesnt exist" />
    ),
  },
]);
export default function Router(): ReactElement {
  return <RouterProvider router={router} />;
}
