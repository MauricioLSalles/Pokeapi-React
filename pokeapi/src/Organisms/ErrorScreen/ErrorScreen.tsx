import { type ReactElement } from "react";
import "./ErrorScreen.css";

export default function ErrorScreen({
  error,
}: {
  error: string;
}): ReactElement {
  return (
    <div className="errorContainer">
      <img className="errorImage" src="/icons/errorImage.svg" />
      <span>{error}</span>
    </div>
  );
}
