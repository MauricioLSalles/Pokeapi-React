import type { TypeDetails } from "../../../Types/Type";
import SquareIcon from "../SquareIcon/SquareIcon";
import "./DataInfoRow.css";

export default function DataInfoWeaknessRow({
  label,
  weaknesses,
}: {
  label: string;
  weaknesses: TypeDetails[];
}) {
  return (
    <li className="DataInfoRow">
      <span className="DataInfoRow-label">{label}</span>
      <div className="DataInfoRow-weaknesses">
        {weaknesses.map((weakness) => (
          <SquareIcon type={weakness} key={weakness.name} />
        ))}
      </div>
    </li>
  );
}
