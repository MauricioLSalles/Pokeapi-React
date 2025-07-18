import type { ReactElement } from "react";
import type { Pokemon } from "../../Types/Pokemon";

export default function PokemonImageOverview({
  pokemonData,
}: {
  pokemonData: Pokemon;
}): ReactElement {
  return (
    <div
      style={{
        backgroundColor: `var(--bg-type-${pokemonData.types[0].type.name}`,
      }}
    >
      dasdsa
    </div>
  );
}
