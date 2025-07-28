import type { ReactElement } from "react";
import type { Pokemon } from "../../../Types/Pokemon";
import "./PokemonImageOverview.css";

export default function PokemonImageOverview({
  pokemonData,
}: {
  pokemonData: Pokemon;
}): ReactElement {
  return (
    <div
      className="pokemonImageOverview-container"
      style={{
        backgroundColor: `var(--bg-type-${pokemonData.types[0].type.name}`,
      }}
    >
      <img
        alt={pokemonData.name}
        className="pokemonImageOverview-image"
        src={pokemonData.sprites.front_default}
      />
    </div>
  );
}
