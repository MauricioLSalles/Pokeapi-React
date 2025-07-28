import { useState } from "react";
import Game from "../../Organisms/Game/Game";
import LanguageSection from "../../Organisms/LanguageSection/LanguageSection";
import GameTemplate from "../../Templates/GameTemplate";

export function PokemonGame() {
  const [language, setLanguage] = useState<string>("en");
  return (
    <GameTemplate
      secondHeader={<LanguageSection setLanguage={setLanguage} />}
      content={<Game language={language} />}
    />
  );
}
