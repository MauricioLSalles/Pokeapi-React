import type { ReactElement } from "react";
import './Button.css';

type props = {
    type: "primary" | "secondary",
    text: string
}

export default function Button({ type, text }: props): ReactElement {
    return (
        <button className={`button ${type}`}>{text}</button>
    )
}
