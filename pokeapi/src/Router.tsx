import { type ReactElement } from "react";
import PokemonGame from "./Pages/PokemonGame";
import PokemonListPage from "./Pages/PokemonListPage";
import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorScreen from "./Organisms/ErrorScreen/ErrorScreen";
import HomePage from "./Pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        path: "/pokedex",
        element: <PokemonListPage />,
      },
      {
        path: "games",
        element: <PokemonGame />,
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
