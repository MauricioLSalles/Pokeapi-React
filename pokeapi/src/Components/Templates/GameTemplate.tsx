import type { ReactElement } from "react";
import "./GameTemplate.css";

export default function GameTemplate({
  secondHeader,
  content,
}: {
  secondHeader: ReactElement;
  content: ReactElement;
}) {
  return (
    <div className="gameContainer">
      <div className="gameSecondHeader">{secondHeader}</div>
      <div className="gameContent">{content}</div>
    </div>
  );
}
