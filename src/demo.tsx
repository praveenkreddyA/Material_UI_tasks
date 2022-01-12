import * as React from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";

export default function BoxSx() {
  return (
    <Box
      component="div"
      sx={{
        textAlign: "center",
        width: 300,
        height: 200,
        backgroundColor: "primary.light",
        textDecoration: "underline"
      }}
    >
      <div>
        Praveen Kumar Reddy
        <br />
        <br />
        <Button variant="contained">Submit</Button>
      </div>
      <TextField
        variant="outlined"
        size="small"
        type="number"
        placeholder="Lower"
        style={{ border: "2px solid brown" }}
        FormHelperTextProps={{ style: { fontWeight: "bold", color: "red" } }}
        helperText="it is color change property"
        onChange={(e) =>
          OnTextValueChanged(false, parseFloat(e.target.value), index)
        }
      />
    </Box>
  );
}
