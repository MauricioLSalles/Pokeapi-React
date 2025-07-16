import Game from "../Organisms/Game/Game";
import LanguageSection from "../Organisms/LanguageSection/LanguageSection";
import GameTemplate from "../templates/GameTemplate";

export default function PokemonGame() {
  return <GameTemplate secondHeader={<LanguageSection />} content={<Game />} />;
}
