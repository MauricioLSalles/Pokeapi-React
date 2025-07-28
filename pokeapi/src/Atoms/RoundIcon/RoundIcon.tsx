import { type ReactElement } from "react";
import type { TypeDetails } from "../../Types/Type";
import "./RoundIcon.css";

export default function RoundIcon({
  type,
}: {
  type: TypeDetails;
}): ReactElement {
  return (
    <div
      className="roundIconContainer"
      style={{ backgroundColor: `var(--bg-type-${type.name}` }}
    >
      <img
        alt={type.name}
        src={`/typesIcons/${type.name}.svg`}
        className="roundIconContainer-icon"
      />
    </div>
  );
}
