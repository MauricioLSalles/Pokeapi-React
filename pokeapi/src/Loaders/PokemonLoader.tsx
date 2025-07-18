import type { LoaderFunctionArgs } from "react-router";
import ApiGet from "../CustomHooks/ApiGet";
import type { Pokemon } from "../Types/Pokemon";
import type { Response } from "../Types/Response";

export async function pokemonLoader({ params }: LoaderFunctionArgs) {
  const response: Response<Pokemon> = await ApiGet<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${params.id}/`
  );
  return { pokemonResponse: response };
}
