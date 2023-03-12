import React from "react";
import Navbar from "./mui/Navbar";
import Input from "./mui/Input";
import Card from "./mui/Card";
import FlexBox from "./mui/FlexBox";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <Navbar />
      <FlexBox
        element={
          <Card
            heading="Registered?"
            inputs={[<Input text="Email" />, <Input text="Password" />]}
            button={"Log In"}
            link={<Link to={"/"}>registered</Link>}
          />
        }
      />
    </div>
  );
};

export default Login;
