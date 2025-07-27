import "./PokemonCard.css";
import CardDescription from "../../Molecules/CardDescription/CardDescription";
import MultipleLabels from "../../Molecules/MultipleLabels/MultipleLabels";
import type { Type } from "../../Types/Type";
import { useNavigate } from "react-router";

function PokemonCard({
  number,
  name,
  labels,
  imgSrc,
}: {
  number: string;
  name: string;
  labels: Type[];
  imgSrc: string;
}) {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => navigate(`/pokemon/${number}/pokedexData`)}
      style={{ backgroundColor: `var(--bg-type-${labels[0].type.name}` }}
      className="PokemonCard"
    >
      <img
        className="PokemonCardDots"
        alt={name}
        src="/backgrounds/Pattern.png"
      />

      <div className="PokemonCard-description">
        <CardDescription number={number} name={name} />
        <MultipleLabels labels={labels} />
      </div>
      <div className="PokemonCard-image-container">
        <img
          src={"/backgrounds/pokeball.png"}
          className="PokemonCard-image-background"
        />
        <img src={imgSrc} className="PokemonCard-image" />
      </div>
    </li>
  );
}

export default PokemonCard;
