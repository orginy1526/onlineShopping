import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow(props: { item: React.ReactNode }) {
  return (
    <React.Fragment>
      {/* design one item */}
      <Grid item xs={4}>
        <Item>{props.item}</Item>
      </Grid>
    </React.Fragment>
  );
}

export default function NestedGrid(props: { cards: Array<React.ReactNode> }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          {/* map through cards */}
          {props.cards.map((item: React.ReactNode, index) => (
            <FormRow key={index} item={item} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
