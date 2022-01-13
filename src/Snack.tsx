import { Snackbar, Alert, Button } from "@mui/material";
import React, { useState } from "react";

export function SnackBar() {
  const [isOpen, setisopen] = useState<boolean>(false);
  const handleClose = () => {
    setisopen(false);
  };
  const handleopen = () => {
    setisopen(true);
  };
  return (
    <>
      <Button variant="outlined" onClick={handleopen}>
        {" "}
        SnackBar Button
      </Button>
      <Snackbar
        open={isOpen}
        onClose={handleClose}
        autoHideDuration={600}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Fetching API DATA
        </Alert>
      </Snackbar>
    </>
  );
}
