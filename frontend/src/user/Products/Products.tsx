import { Box } from "@mui/material";
import React from "react";
import Footer from "../../Footer";
import Card from "../Mui/Card";
import Grid from "../Mui/Grid";
import Navbar from "../Navbar";

const Products = () => {
  return (
    <div>
      <Navbar />
      <Grid
        cards={[
          <Card
            img="https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019__480.jpg"
            name={"Banana"}
            price={28}
          />,
          <Card
            img="https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019__480.jpg"
            name={"Banana"}
            price={28}
          />,
          <Card
            img="https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019__480.jpg"
            name={"Banana"}
            price={28}
          />,
        ]}
      />
      {/* footer */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Footer />
      </Box>
    </div>
  );
};

export default Products;
