import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const cities = [
  {
    value: "TLV",
    label: "Tel Aviv",
  },
  {
    value: "Jerusalem",
    label: "Jerusalem",
  },
  {
    value: "Holon",
    label: "Holon",
  },
];

const streets = [
  {
    value: "Israel Galil",
    label: "Israel Galil",
  },
  {
    value: "Mishar",
    label: "Mishar",
  },
];

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
        Order
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
        {/* select */}
        {/* city */}
        <TextField
          id="outlined-select-currency"
          select
          label="Cities"
          defaultValue="TLV"
        >
          {cities.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        {/* street */}
        <TextField
          id="outlined-select-currency"
          select
          label="Streets"
          defaultValue="Israel Galil"
        >
          {streets.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        {/* date */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker label="Basic date picker" />
          </DemoContainer>
        </LocalizationProvider>

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
