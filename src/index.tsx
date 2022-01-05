import * as React from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import BoxSx from "./Box";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <BoxSx />
  </StyledEngineProvider>,
  document.querySelector("#root")
);
