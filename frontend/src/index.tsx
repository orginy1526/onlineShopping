import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<BrowserRouter><Routing/></BrowserRouter>);
