import RoundIcon from "../../Atoms/RoundIcon/RoundIcon";
import type { Type } from "../../Types/Type";
import "./PokemonDataDetails.css";

export default function PokemonDataDetails({ types }: { types: Type[] }) {
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
