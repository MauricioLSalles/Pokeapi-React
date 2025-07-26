import { type ReactElement } from "react";
import type { TypeDetails } from "../../Types/Type";
import "./SquareIcon.css";

export default function SquareIcon({
  type,
}: {
  type: TypeDetails;
}): ReactElement {
  return (
    <div
      className="squareIconContainer"
      style={{ backgroundColor: `var(--bg-type-${type.name}` }}
    >
      <img
        src={`/typesIcons/${type.name}.svg`}
        className="squareIconContainer-icon"
      />
    </div>
  );
}
