import { type ReactElement } from "react";
import Button from "../../Atoms/Button/Button";
import "./Game.css";
import type { Response } from "../../Types/Response";
import UseGet from "../../CustomHooks/UseGet";
import type { Pokemon } from "../../Types/Pokemon";

export default function Game(): ReactElement {
  const response: Response<Pokemon> = UseGet<Pokemon>(
    "https://pokeapi.co/api/v2/pokemon/1/"
  );
  if (response.loading) return <div>loading ...</div>;
  return (
    <div className="game">
      <div
        className="guessPokemon"
        style={{ mask: `url(${response.data?.sprites.front_default})` }}
      >
        <div className="guessPokemonBackground" />
      </div>
      <div className="gameButtons">
        <Button type="primary" text="Pikachu" />
        <Button type="primary" text="Pikachu" />
        <Button type="primary" text="Pikachu" />
        <Button type="primary" text="Pikachu" />
      </div>
    </div>
  );
}
