import Button from "../../Atoms/Button/Button";
import "./RestartGame.css";

export default function RestartGame({
  score,
  restart,
}: {
  score: number;
  restart: () => void;
}) {
  return (
    <div className="RestartGame">
      <h2>Your score is {score}</h2>
      <p>do you want to restart?</p>
      <Button onClick={restart} text="Restart" />
    </div>
  );
}
