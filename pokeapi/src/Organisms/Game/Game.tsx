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
  const response1: Response<Pokemon> = UseGet<Pokemon>(
    "https://pokeapi.co/api/v2/pokemon/2/"
  );
  const response2: Response<Pokemon> = UseGet<Pokemon>(
    "https://pokeapi.co/api/v2/pokemon/3/"
  );
  const response3: Response<Pokemon> = UseGet<Pokemon>(
    "https://pokeapi.co/api/v2/pokemon/4/"
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
        <Button onClick={reveal} text={response.data?.name ?? ""} />
        <Button text={response1.data?.name ?? ""} />
        <Button text={response2.data?.name ?? ""} />
        <Button text={response3.data?.name ?? ""} />
      </div>
    </div>
  );
}
