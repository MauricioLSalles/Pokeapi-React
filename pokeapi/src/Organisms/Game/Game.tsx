import { useRef, type ReactElement } from "react";
import Button from "../../Atoms/Button/Button";
import "./Game.css";
import type { Response } from "../../Types/Response";
import UseGet from "../../CustomHooks/UseGet";
import type { Pokemon } from "../../Types/Pokemon";

export default function Game(): ReactElement {
  const response: Response<Pokemon> = UseGet<Pokemon>(
    "https://pokeapi.co/api/v2/pokemon/1/"
  );

  const imageRef = useRef<HTMLImageElement | null>(null);

  function reveal() {
    if (imageRef.current) {
      imageRef.current.className = "guessPokemonImage show";
    }
  }

  if (response.loading) return <div>loading ...</div>;
  return (
    <div className="game">
      <img
        ref={imageRef}
        src={response.data?.sprites.front_default}
        className={`guessPokemonImage `}
      />
      <div className="gameButtons">
        <Button onClick={reveal} text="Pikachu" />
        <Button text="Pikachu" />
        <Button text="Pikachu" />
        <Button text="Pikachu" />
      </div>
    </div>
  );
}
