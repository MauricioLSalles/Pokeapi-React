import { Outlet } from "react-router-dom";
import Navbar from "../../Organisms/Header/Navbar";

export function HomePage() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
