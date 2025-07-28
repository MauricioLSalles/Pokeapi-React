import { useContext, type ReactElement } from "react";
import { PokemonContext } from "../../../CustomHooks/PokemonContext";
import type { ExpandedDataPokemon } from "../../../Types/Pokemon";
import "./PokemonEvolutionDetails.css";
import RoundIcon from "../../Atoms/RoundIcon/RoundIcon";

export function PokemonEvolutionDetails(): ReactElement {
  const pokemon: ExpandedDataPokemon = useContext(PokemonContext);
  return (
    <>
      <h2>Evolution Chart</h2>
      <div className="PokemonEvolutionDetails">
        {pokemon.evolutions.map((pokemon) => (
          <div className="PokemonEvolutionDetails-container">
            <img
              className="PokemonEvolutionDetails-image"
              alt={pokemon.name}
              src={pokemon.sprites.front_default}
            />
            <span>{pokemon.name}</span>
            <div className="PokemonEvolutionDetails-icons">
              {pokemon.types.map((type) => (
                <RoundIcon key={type.type.name} type={type.type} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
