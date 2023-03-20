import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FormPropsTextFields() {
  // navigate
  const navigate = useNavigate();

  // sections
  const sections = [
    "First Name",
    "Last Name",
    "Email",
    "password",
    "Validate Password",
    "id",
  ];
  return (
    <div>
      {/* heading */}
      <Typography
        fontFamily={"cursive"}
        color={"#2196f3"}
        variant="h3"
        gutterBottom
        align="center"
      >
        Register
      </Typography>

      {/* form  */}
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        
        {/* all text fields */}
        {sections.map((item: string, index) => (
          <TextField key={index} required id="outlined-required" label={item} />
        ))}

        {/* register - submit btn */}
        <Button variant="contained" onClick={() => navigate("/products")}>
          Register
        </Button>

        {/* cancel btn */}
        <Button onClick={() => navigate("/")} sx={{ m: 2 }} variant="outlined">
          Cancel
        </Button>
      </Box>
    </div>
  );
}
