import "./PokemonCard.css";
import CardDescription from "../../Molecules/CardDescription/CardDescription";
import MultipleLabels from "../../Molecules/MultipleLabels/MultipleLabels";
import type { Label } from "../../Types/Label";

function PokemonCard({
  number,
  name,
  labels,
  imgSrc,
}: {
  number: string;
  name: string;
  labels: Label[];
  imgSrc: string;
}) {
  return (
    <div
      style={{ backgroundColor: `var(--bg-type-${labels[0].type.name}` }}
      className="PokemonCard"
    >
      <img className="PokemonCardDots" src="/backgrounds/Pattern.png" />
      <img
          src={"/backgrounds/pokeball.png"}
          className="PokemonCard-image-background"
        />
      <div className="PokemonCard-description">
        <CardDescription number={number} name={name} />
        <MultipleLabels labels={labels} />
      </div>
      <div className="PokemonCard-image-container">
        
        <img src={imgSrc} className="PokemonCard-image" />
      </div>
    </div>
  );
}

export default PokemonCard;
