import { type ReactElement } from "react";
import "./ErrorScreen.css";

export default function ErrorScreen({
  error,
  fullScreen = false,
}: {
  error: string;
  fullScreen?: boolean;
}): ReactElement {
  return (
    <div className={`errorContainer ${fullScreen ? "errorContainerFull" : ""}`}>
      <img className="errorImage" src="/icons/errorImage.svg" />
      <span>{error}</span>
    </div>
  );
}
