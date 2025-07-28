import type { ReactElement } from "react";
import "./PokemonListPageTemplate.css";

function PokemonListPageTemplate({
  secondHeader,
  content,
}: {
  secondHeader: ReactElement;
  content: ReactElement;
}) {
  return (
    <div className="container">
      <div className="secondHeader">{secondHeader}</div>
      <div className="ListContent">{content}</div>
    </div>
  );
}

export default PokemonListPageTemplate;
