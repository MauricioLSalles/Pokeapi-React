import Game from "../Organisms/Game/Game";
import Navbar from "../Organisms/Header/Navbar";
import LanguageSection from "../Organisms/LanguageSection/LanguageSection";
import GameLayout from "../templates/GameLayout";
import type { Link } from "../Types/Link";


export default function PokemonGame() {

    const links: Link[] = [
        {
            name: "Games",
            link: "games",
        },
        {
            name: "Langs",
            link: "langs",
        },
        {
            name: "Pokedex",
            link: "pokedex",
        },
    ];

    return (
        <GameLayout
            header={<Navbar links={links} />}
            secondHeader={<LanguageSection />}
            content={<Game />} />
    )
}
