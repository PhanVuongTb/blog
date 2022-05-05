import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";

function LayoutWeb() {
  return (
    <div>
      <header>
        <Topbar />
      </header>
      <Outlet />
    </div>
  );
}

export default LayoutWeb;
