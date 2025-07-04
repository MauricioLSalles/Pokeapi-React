import type { ReactElement } from "react";
import "./layout.css";

function Layout({ header, secondHeader, content }: { header: ReactElement, secondHeader: ReactElement, content: ReactElement }) {
  return (
    <div>
      <header className="header">
        {header}
      </header>
      <div className="secondHeader">
        {secondHeader}
      </div>
      <div className="content">
        {content}
      </div>
    </div>
  );
}

export default Layout;
