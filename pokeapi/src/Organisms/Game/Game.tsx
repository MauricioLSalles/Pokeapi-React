import { useEffect, useRef, useState, type ReactElement } from "react";
import Button from "../../Atoms/Button/Button";
import "./Game.css";
import ApiGet from "../../CustomHooks/ApiGet";
import type { Pokemon } from "../../Types/Pokemon";
import type { Response } from "../../Types/Response";
import LoadingScreen from "../../Molecules/LoadingScreen/LoadingScreen";
import ErrorScreen from "../ErrorScreen/ErrorScreen";
import RestartGame from "../../Molecules/RestartGame/RestartGame";

export default function Game(): ReactElement {
  const [list, setList] = useState<Response<Pokemon>[]>([]);
  const [lose, setLose] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<number>(200);
  const tries = useRef<number>(0);
  const score = useRef<number>(0);
  const correct = useRef<number>(0);
  const imageRef = useRef<HTMLImageElement | null>(null);

  async function loadList() {
    setLoading(true);
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
    setError(
      lisResponses.reduce(
        (prev, current) => (current.error ? current.status : prev),
        200
      )
    );
    setList(lisResponses);
    setLoading(false);
    correct.current = Math.floor(Math.random() * 3);
  }

  useEffect(() => {
    loadList();
  }, []);

  function reveal(id: number) {
    if (imageRef.current && id === correct.current) {
      {
        imageRef.current.className = "guessPokemonImage show";
        setTimeout(() => loadList(), 2000);
      }
    } else tries.current++;
    if (tries.current >= 3) {
      setLose(true);
      tries.current = 0;
    }
  }

  function restart() {
    setLose(false);
    score.current = 0;
    tries.current = 0;
    loadList();
  }

  if (loading) return <LoadingScreen />;
  if (error >= 300)
    return (
      <ErrorScreen
        error={`there was a error trying to connect.\n Code: ${error}`}
      />
    );
  if (lose) return <RestartGame score={score.current} restart={restart} />;
  return (
    <div className="game">
      <img
        ref={imageRef}
        src={list[correct.current].data?.sprites.front_default}
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
