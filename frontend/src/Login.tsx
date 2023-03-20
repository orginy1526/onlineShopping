import { Box, Button, Link, TextField, Typography } from "@mui/material";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  // navigate
  const navigate = useNavigate();

  // input value
  const { register, getValues } = useForm();

  // validation on Submit -> email & password
  const handleSubmit = () => {
    // regex
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    // text field value
    const inputs = getValues(["email", "password"]);

    // email error
    !emailRegex.test(inputs[0]) &&
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Seems like you got the wrong email!",
      });

    // password error
    !passwordRegex.test(inputs[1]) &&
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Seems like you got the wrong password!`,
      });

    // email & password error
    !emailRegex.test(inputs[0]) &&
      !passwordRegex.test(inputs[1]) &&
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Make sure you fill all the fields correctly",
        footer: '<a href="http://localhost:3000/register">register</a>',
      });

    // success
    emailRegex.test(inputs[0]) &&
      passwordRegex.test(inputs[1]) &&
      navigate("/products");
  };

  // users
  const [users, setUsers] = useState({});
  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=10")
      .then((response) => response.json())
      .then((res) => {
        setUsers(res.users);
        console.log(res.users);
      });
  }, []);
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
        Log In
      </Typography>

      {/* form */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Email */}
        <TextField
          margin={"normal"}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          {...register("email")}
        />

        {/* password */}
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          margin={"normal"}
          {...register("password")}
        />

        {/* Login button */}
        <Button variant="contained" onClick={handleSubmit}>
          Login
        </Button>

        {/* forgot password link */}
        <Link marginTop={2} href="#">
          Forgot password?
        </Link>

        {/* register btn */}
        <Button
          sx={{ m: 2 }}
          variant="outlined"
          onClick={() => {
            navigate("/register");
          }}
        >
          Register
        </Button>
      </Box>

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

export default Login;

// real password regex
// var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
