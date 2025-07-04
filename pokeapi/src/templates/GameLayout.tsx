import type { ReactElement } from "react";
import "./GameLayout.css";

export default function GameLayout({ header, secondHeader, content }: { header: ReactElement, secondHeader: ReactElement, content: ReactElement }) {
    return (
        <div className="gameContainer">
            <header className="gameHeader">
                {header}
            </header>
            <div className="gameSecondHeader">
                {secondHeader}
            </div>
            <div className="gameContent">
                {content}
            </div>
        </div>
    );
}

