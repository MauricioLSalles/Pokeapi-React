import type { LoaderFunctionArgs } from "react-router";
import ApiGet from "../CustomHooks/ApiGet";
import type { ExpandedDataPokemon, Pokemon } from "../Types/Pokemon";
import type { Response } from "../Types/Response";
import type { TypeExtendedDetails } from "../Types/TypeExtendedDetails";
import type { SpeciesDetails } from "../Types/SpeciesDetails";

export async function pokemonLoader({ params }: LoaderFunctionArgs): Promise<{
  pokemonData: ExpandedDataPokemon;
}> {
  const pokemonResponse: Response<Pokemon> = await ApiGet<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${params.id}/`
  );
  const typeDetailsResponse: Response<TypeExtendedDetails> =
    await ApiGet<TypeExtendedDetails>(
      pokemonResponse.data?.types[0].type.url ?? ""
    );

  const speciesResponse: Response<SpeciesDetails> =
    await ApiGet<SpeciesDetails>(pokemonResponse.data?.species.url ?? "");

  const expandedData = composePokemonData(
    pokemonResponse.data,
    typeDetailsResponse.data,
    speciesResponse.data
  );

  return { pokemonData: expandedData };
}

function composePokemonData(
  pokeData: Pokemon | null,
  typeData: TypeExtendedDetails | null,
  speciesData: SpeciesDetails | null
): ExpandedDataPokemon {
  if (pokeData !== null && typeData !== null && null !== speciesData) {
    return {
      ...pokeData,
      ...typeData,
      ...speciesData,
    };
  }
  throw new Error();
}
