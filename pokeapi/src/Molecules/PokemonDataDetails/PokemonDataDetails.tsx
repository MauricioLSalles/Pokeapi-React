import RoundIcon from "../../Atoms/RoundIcon/RoundIcon";
import type { Label } from "../../Types/Label";
import "./PokemonDataDetails.css";

export default function PokemonDataDetails({ types }: { types: Label[] }) {
  return (
    <div className="dataDetails">
      <span className="dataDetails-generation">Generation 1</span>
      <div className="dataDetails-typeList">
        {types.map((type) => (
          <RoundIcon type={type} />
        ))}
      </div>
    </div>
  );
}
