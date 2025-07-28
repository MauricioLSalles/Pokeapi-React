import { type ReactElement } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen(): ReactElement {
  return (
    <div className="loadingContainer">
      <img alt="loading" className="loadImage" src="/icons/bigPokeball.svg" />
    </div>
  );
}
