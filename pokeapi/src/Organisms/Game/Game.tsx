import { useEffect, useRef, useState, type ReactElement } from "react";
import Button from "../../Atoms/Button/Button";
import "./Game.css";
import ApiGet from "../../CustomHooks/ApiGet";
import type { Pokemon } from "../../Types/Pokemon";
import type { Response } from "../../Types/Response";

export default function Game(): ReactElement {
  const [list, setList] = useState<Response<Pokemon>[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  async function loadList() {
    const lisResponses: Response<Pokemon>[] = [
      await ApiGet<Pokemon>(
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 200)}/`
      ),
      await ApiGet<Pokemon>(
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 200)}/`
      ),
      await ApiGet<Pokemon>(
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 200)}/`
      ),
      await ApiGet<Pokemon>(
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 200)}/`
      ),
    ];
    setList(lisResponses);
    setLoading(false);
  }

  useEffect(() => {
    loadList();
  }, []);

  const correct = Math.floor(Math.random() * 3);

  const imageRef = useRef<HTMLImageElement | null>(null);

  function reveal(id: number) {
    if (imageRef.current && id === correct) {
      imageRef.current.className = "guessPokemonImage show";
    }
  }

  if (loading) return <div>loading ...</div>;
  return (
    <div className="game">
      <img
        ref={imageRef}
        src={list[correct].data?.sprites.front_default}
        className={`guessPokemonImage `}
      />
      <div className="gameButtons">
        <Button onClick={() => reveal(0)} text={list[0].data?.name ?? ""} />
        <Button onClick={() => reveal(1)} text={list[1].data?.name ?? ""} />
        <Button onClick={() => reveal(2)} text={list[2].data?.name ?? ""} />
        <Button onClick={() => reveal(3)} text={list[3].data?.name ?? ""} />
      </div>
    </div>
  );
}
