import Search from "../Search/Search";
import "./SearchSection.css";
export default function SearchSection() {
  return (
    <div className="searchSection">
      <img className="sideSearchImage" src="/backgrounds/6x3.svg" />
      <Search />
      <img className="sideSearchImage" src="/backgrounds/6x3.svg" />
    </div>
  );
}
