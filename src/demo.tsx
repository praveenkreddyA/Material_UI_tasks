import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Stack, TextField } from "@mui/material";

export default function BoxSx() {
  return (
    <Stack spacing={1} direction="row">
      <Box
        sx={{
          textAlign: "center",
          width: 200,
          height: 100,
          backgroundColor: "primary.light",
          textDecoration: "underline"
        }}
      >
        Praveen Kumar Reddy
        <br />
        <br />
        <Button variant="contained">Submit</Button>
      </Box>
      <Box sx={{ backgroundColor: "lightblue" }}>
        <TextField
          variant="outlined"
          size="small"
          type="number"
          placeholder="Lower"
          style={{ border: "2px solid brown" }}
          FormHelperTextProps={{ style: { fontWeight: "bold", color: "red" } }}
          helperText="it is color change property"
        />
      </Box>
    </Stack>
  );
}
