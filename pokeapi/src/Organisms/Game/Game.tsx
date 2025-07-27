import { useRef, useState, type ReactElement } from "react";
import Button from "../../Atoms/Button/Button";
import "./Game.css";
import type { Pokemon, PokemonWithName } from "../../Types/Pokemon";
import type { Response } from "../../Types/Response";
import LoadingScreen from "../../Molecules/LoadingScreen/LoadingScreen";
import ErrorScreen from "../ErrorScreen/ErrorScreen";
import RestartGame from "../../Molecules/RestartGame/RestartGame";
import { useLoaderData } from "react-router";
import {
  createFourPokemonsRequests,
  loadNames,
} from "../../Utils/ApiCallUtils";

export default function Game(): ReactElement {
  const { fourRandomPokemons }: { fourRandomPokemons: PokemonWithName[] } =
    useLoaderData();
  const [list, setList] = useState<PokemonWithName[]>(fourRandomPokemons);
  const [lose, setLose] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const tries = useRef<number>(0);
  const score = useRef<number>(0);
  const correct = useRef<number>(Math.floor(Math.random() * 3));
  const imageRef = useRef<HTMLImageElement | null>(null);

  async function loadList() {
    setLoading(true);
    setList(await requestFourPokemons());
    setLoading(false);
    correct.current = Math.floor(Math.random() * 3);
  }

  async function requestFourPokemons(): Promise<PokemonWithName[]> {
    try {
      const pokemonResponses: Response<Pokemon>[] = await Promise.all(
        createFourPokemonsRequests()
      );
      return await loadNames(pokemonResponses);
    } catch {
      setError(true);
      setLoading(false);
      return [];
    }
  }

  function reveal(id: number) {
    if (id === correct.current) {
      {
        score.current++;
        manageCorrectReveal();
      }
    } else tries.current++;
    checkIfFailedGame();
  }

  function manageCorrectReveal() {
    if (imageRef.current) {
      imageRef.current.className = "guessPokemonImage show";
      setTimeout(() => loadList(), 2000);
    }
  }

  function checkIfFailedGame() {
    if (tries.current >= 3) {
      setLose(true);
    }
  }

  function restart() {
    setLose(false);
    score.current = 0;
    tries.current = 0;
    loadList();
  }

  if (loading) return <LoadingScreen />;

  if (error)
    return (
      <ErrorScreen error={`there was a error trying to load the pokemons.`} />
    );

  if (lose) return <RestartGame score={score.current} restart={restart} />;

  return (
    <div className="game">
      <img
        ref={imageRef}
        src={list[correct.current].sprites.front_default}
        className={`guessPokemonImage `}
      />
      <div className="gameButtons">
        <Button onClick={() => reveal(0)} text={list[0].name ?? ""} />
        <Button onClick={() => reveal(1)} text={list[1].name ?? ""} />
        <Button onClick={() => reveal(2)} text={list[2].name ?? ""} />
        <Button onClick={() => reveal(3)} text={list[3].name ?? ""} />
      </div>
    </div>
  );
}
