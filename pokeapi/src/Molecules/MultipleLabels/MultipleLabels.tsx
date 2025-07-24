import type { Type } from "../../Types/Type";
import Label from "../Label/Label";
import "./MultipleLabels.css";
function MultipleLabels({ labels }: { labels: Type[] }) {
  return (
    <div className="MultipleLabels">
      {labels.map((label, id) => (
        <Label key={id} label={label.type.name} />
      ))}
    </div>
  );
}

export default MultipleLabels;
