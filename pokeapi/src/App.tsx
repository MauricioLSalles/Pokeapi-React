import { StrictMode } from "react";
import "./App.css";
import "./Layout.css";
import Router from "./Router";
function App() {
  return (
    <StrictMode>
      <div className="content">
        <Router />
      </div>
    </StrictMode>
  );
}

export default App;
