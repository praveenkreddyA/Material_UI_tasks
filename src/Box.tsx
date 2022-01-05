import * as React from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import { useRef } from "react";

export default function BoxSx() {
  const valueRef = useRef<string>("");
  function OnSubmit() {
    alert("messsage" + valueRef.current.value);
  }
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
        <TextField
          id="outlined-textarea"
          label="Content"
          placeholder="Write your thoughts"
          multiline
          variant="outlined"
          rows={1}
          inputRef={valueRef} //connecting inputRef property of TextField to the valueRef
        />
        <Button variant="contained" onClick={OnSubmit}>
          Submit
        </Button>
      </div>
    </Box>
  );
}
