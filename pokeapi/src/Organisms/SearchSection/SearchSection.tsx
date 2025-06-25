import Search from "../Search/Search";
import "./SearchSection.css";
export default function SearchSection() {
  return (
    <div className="searchSection">
      <img src="/backgrounds/Pattern.png" />
      <Search style={{ flexGrow: 5 }} />
      <img src="/backgrounds/Pattern.png" />
    </div>
  );
}
