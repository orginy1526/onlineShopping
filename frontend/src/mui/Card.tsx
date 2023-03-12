import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { CardMedia } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

interface Props {
  heading?: string;
  heading2?: string;
  inputs?: Array<React.ReactNode>;
  text?: string;
  text2?: string;
  button?: string | React.ReactNode;
  link?: React.ReactNode;
  element?: React.ReactNode;
  img?: string;
}

export default function BasicCard(props: Props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      {props.img && (
        <CardMedia
          sx={{ height: 140 }}
          image={props.img}
          title="green iguana"
        />
      )}
      <CardContent>
        <Typography variant={"h5"} m={2} component="div">
          {props.heading}
        </Typography>
        {props.inputs &&
          props.inputs.map((item, i) => (
            <Typography
              key={i}
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {item}
            </Typography>
          ))}
        <Typography variant="body1">{props.text}</Typography>
        {props.element}
        <Typography variant={"h5"} m={2} component="div">
          {props.heading2}
        </Typography>
        <Typography variant="body1">{props.text2}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">
          {props.button}
        </Button>
        <Button size="small">{props.link}</Button>
      </CardActions>
    </Card>
  );
}
