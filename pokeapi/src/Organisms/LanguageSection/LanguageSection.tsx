import { type ReactElement } from "react";
import "./LanguageSection.css";

export default function LanguageSection({
  setLanguage,
}: {
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}): ReactElement {
  return (
    <div className="languageSection">
      <span className="text-normal">Select a language</span>
      <div className="launageFlags">
        <img onClick={() => setLanguage("ja")} src="/flags/flag1.svg" />
        <img onClick={() => setLanguage("ko")} src="/flags/flag2.svg" />
        <img onClick={() => setLanguage("en")} src="/flags/flag3.svg" />
        <img onClick={() => setLanguage("es")} src="/flags/flag4.svg" />
      </div>
    </div>
  );
}
