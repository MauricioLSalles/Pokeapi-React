import type { ReactElement } from "react";
import "./PokemonDataHeader.css";
import { useNavigate } from "react-router-dom";
type props = {
  number: number;
  name: string;
};
function PokemonDataHeader({ number, name }: props): ReactElement {
  const navigate = useNavigate();
  return (
    <div className="PokemonDataHeader">
      <button onClick={() => navigate(-1)} className="PokemonDataHeader-button">
        <img src="/icons/back.svg" alt="back" />
      </button>
      <p className="PokemonDataHeader-number text-enourmous">#{number}</p>
      <h1 className="PokemonDataHeader-name text-biggest">{name}</h1>
    </div>
  );
}

export default PokemonDataHeader;
