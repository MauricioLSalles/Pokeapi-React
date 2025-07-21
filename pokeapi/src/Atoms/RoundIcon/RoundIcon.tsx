import { type ReactElement } from "react";
import type { Label } from "../../Types/Label";
import "./RoundIcon.css";

export default function RoundIcon({ type }: { type: Label }): ReactElement {
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
