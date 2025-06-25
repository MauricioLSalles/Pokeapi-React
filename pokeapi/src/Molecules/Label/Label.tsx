import LabelText from "../../Atoms/LabelText/LabelText";
import "./Label.css";

function Label({ label }: { label: string }) {
  return (
    <div style={{ backgroundColor: `var(--type-${label})` }} className="label">
      <img src="/types-icons/Fairy.svg" className="label-icon"></img>
      <LabelText label={label} />
    </div>
  );
}

export default Label;
