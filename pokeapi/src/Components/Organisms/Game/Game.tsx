import { useRef, useState, type ReactElement } from "react";
import "./Game.css";
import type { Pokemon, PokemonWithName } from "../../../Types/Pokemon";
import type { Response } from "../../../Types/Response";
import { useLoaderData } from "react-router";
import {
  createFourPokemonsRequests,
  loadNames,
} from "../../../Utils/ApiCallUtils";
import LoadingScreen from "../../Molecules/LoadingScreen/LoadingScreen";
import ErrorScreen from "../ErrorScreen/ErrorScreen";
import RestartGame from "../../Molecules/RestartGame/RestartGame";
import Button from "../../Atoms/Button/Button";

export default function Game({ language }: { language: string }): ReactElement {
  const MAX_TRIES = 3;
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

  async function loadList(): Promise<void> {
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

  /**
   * Check if the selected pokemon is the one in the image. If its correct the score goes upm show
   * the pokemon and load the next four. If its not it increase the tries counter and check if the game is over
   * @param selectedPokemonId The id of the selected pokemon
   */
  function checkCorrect(selectedPokemonId: number): void {
    if (selectedPokemonId === correct.current) {
      {
        score.current++;
        showAndLoadNext();
      }
    } else {
      tries.current++;
      checkIfFailedGame();
    }
  }

  /**
   *  Updates the className of the image to show it and after 2 seconds it loads another 4 pokemons
   */
  function showAndLoadNext(): void {
    if (imageRef.current) {
      imageRef.current.className = "guessPokemonImage show";
      setTimeout(() => loadList(), 2000);
    }
  }

  /**
   * If the number of tries matches or excedes the max tries, the lose state is change to false to show the lose screen
   */
  function checkIfFailedGame(): void {
    if (tries.current >= MAX_TRIES) {
      setLose(true);
    }
  }

  /**
   * Reset to the default states and loads 4 new pokemons
   */
  function restart(): void {
    setLose(false);
    score.current = 0;
    tries.current = 0;
    loadList();
  }

  function selectLanguage(pokemon: PokemonWithName): string {
    return (
      pokemon.names.find((name) => name.language.name === language)?.name ??
      pokemon.name
    );
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
        alt={list[correct.current].name}
        src={list[correct.current].sprites.front_default}
        className={`guessPokemonImage `}
      />
      <div className="gameButtons">
        <Button
          onClick={() => checkCorrect(0)}
          text={selectLanguage(list[0])}
        />
        <Button
          onClick={() => checkCorrect(1)}
          text={selectLanguage(list[1])}
        />
        <Button
          onClick={() => checkCorrect(2)}
          text={selectLanguage(list[2])}
        />
        <Button
          onClick={() => checkCorrect(3)}
          text={selectLanguage(list[3])}
        />
      </div>
    </div>
  );
}
