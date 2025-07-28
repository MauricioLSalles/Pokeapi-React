import LabelText from "../../Atoms/LabelText/LabelText";
import "./Label.css";

function Label({ label }: { label: string }) {
  return (
    <div
      style={{ backgroundColor: `var(--type-${label})` }}
      className="label text-normal"
    >
      <img
        alt={label}
        src={`/typesIcons/${label}.svg`}
        className="label-icon"
      ></img>
      <LabelText label={label} />
    </div>
  );
}

export default Label;
