import { type ReactElement } from "react";
import type { Type } from "../../Types/Type";
import "./RoundIcon.css";

export default function RoundIcon({ type }: { type: Type }): ReactElement {
  return (
    <div>
      <div
        className="roundIconContainer"
        style={{ backgroundColor: `var(--bg-type-${type.type.name}` }}
      >
        <img
          src={`/typesIcons/${type.type.name}.svg`}
          className="roundIconContainer-icon"
        />
      </div>
    </div>
  );
}
