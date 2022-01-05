import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

export default function BoxSx() {
  return (
    <Box
      component="div"
      sx={{
        textAlign: "center",
        width: 300,
        height: 100,
        backgroundColor: "secondary.main",
        textDecoration: "underline"
      }}
    >
      <div>
        Praveen Kumar Reddy
        <br />
        <br />
        <Button variant="contained">Submit</Button>
      </div>
    </Box>
  );
}
