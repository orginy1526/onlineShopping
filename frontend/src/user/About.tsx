import { Typography } from "@mui/material";
import Navbar from "../mui/Navbar";
import Card from "../mui/Card";
import FlexBox from "../mui/FlexBox";
import { useEffect, useState } from "react";
const About = () => {
  const [cartStatus, setCartStatus] = useState("");
  useEffect(() => {
    setCartStatus("open");
  }, []);
  return (
    <div>
      <Navbar />
      <Typography m={3} variant="h5" align="center">
        You should Buy Here Because...
      </Typography>
      <FlexBox
        element={
          <Card
            heading="Amount of products"
            text={"we currently hold 3 products "}
            heading2="Amount of orders"
            text2={"we currently hold 3 orders "}
            element={<hr />}
            img={
              "https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934__480.png"
            }
            button={cartStatus}
          />
        }
      />
    </div>
  );
};

export default About;
