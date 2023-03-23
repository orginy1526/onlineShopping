import { Box, Button, Link, TextField, Typography } from "@mui/material";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  // users
  const [users, setUsers] = useState({});

  // navigate
  const navigate = useNavigate();

  // input value
  const { register, getValues, getFieldState } = useForm();

  // error message
  const errorMsg = (text: string, footer?: string) => {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: text,
      footer: footer,
    });
  };

  // input/textfield error
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // validation on Submit -> email & password
  const handleSubmit = () => {
    // regex
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    // console log regex from useForm
    console.log(getFieldState("email"));

    // // text field value
    const inputs = getValues(["email", "password"]);

    // empty fields
    if (inputs.includes("")) {
      errorMsg(
        "Make sure you fill all the fields",
        '<a href="http://localhost:3000/register">register</a>'
      );
    }

    // success
    else if (
      emailRegex.test(getValues("email")) &&
      passwordRegex.test(getValues("password"))
    ) {
      console.log(users);
      // navigate("/products");
    }

    // wrong email / password
    else {
      errorMsg(
        "Make sure you wrote all the details correctly",
        '<a href="http://localhost:3000/register">Don\'t have an account? Register</a>'
      );
    }
  };

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
          {...(register("email", {
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "invalid email address",
            },
          }),
          {
            onBlur: (e) => {
              e.target.value === "" && setEmailError(true);
            },
            onChange: (e) => {
              e.target.value === ""
                ? setEmailError(true)
                : setEmailError(false);
            },
          })}
          error={emailError}
        />

        {/* password */}
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          margin={"normal"}
          {...(register("password", {
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          }),
          {
            onBlur: (e) => {
              e.target.value === "" && setPasswordError(true);
            },
            onChange: (e) => {
              e.target.value === ""
                ? setPasswordError(true)
                : setPasswordError(false);
            },
          })}
          error={passwordError}
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
