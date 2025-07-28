import type { ReactElement } from "react";
import "./Button.css";

type props = {
  type?: "primary" | "secondary";
  text: string;
  onClick?: () => void;
};

export default function Button({
  type = "primary",
  text,
  onClick,
}: props): ReactElement {
  return (
    <button onClick={onClick} className={`button ${type} text-normal`}>
      {text}
    </button>
  );
}
