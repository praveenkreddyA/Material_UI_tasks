import * as React from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import Demo from "./demo";
import { SnackBar } from "./Snack";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <SnackBar />
  </StyledEngineProvider>,
  document.querySelector("#root")
);
