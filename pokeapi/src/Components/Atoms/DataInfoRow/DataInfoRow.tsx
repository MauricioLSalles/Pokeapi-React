import "./DataInfoRow.css";

export default function DataInfoRow({
  label,
  text,
}: {
  label: string;
  text: string;
}) {
  return (
    <li className="DataInfoRow">
      <span className="DataInfoRow-label">{label}</span>
      <span className="DataInfoRow-text">{text}</span>
    </li>
  );
}
