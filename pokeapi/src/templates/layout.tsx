import type { ReactElement } from "react";
import "./layout.css";

function Layout({header, secondHeader, content}:{header:ReactElement, secondHeader:ReactElement, content:ReactElement}) {
  return (
    <div>
      <header className="header">
        {header}
      </header>
      <div className="secondHeader">
        {secondHeader}
      </div>
      <section className="content">
        {content}
      </section>
    </div>
  );
}

export default Layout;
