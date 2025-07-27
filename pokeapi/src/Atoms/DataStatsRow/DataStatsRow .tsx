import "./DataStatsRow .css";

export default function DataStatsRow({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <li className="DataStatsRow ">
      <span className="DataStatsRow-label">{label.replace("-", " ")}</span>
      <div
        style={{ width: `${value}%` }}
        className="DataStatsRow-completedBar"
      />
      <span className="DataStatsRow-text">{value}</span>
    </li>
  );
}
