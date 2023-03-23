import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
export default function ImgMediaCard(props: {
  img: string;
  name: string;
  price: number;
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="banana"
        //   props.img
        image={props.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {/* props.name */}
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* props.price */}${props.price}
        </Typography>
      </CardContent>
      <CardActions>
        {/* add to cart */}
        <Button size="small">
          <AddIcon />
        </Button>
        {/* expend details */}
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
