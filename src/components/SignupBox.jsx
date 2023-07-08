import { useState } from "react";
import logo from "../assets/HomePage/images/insta.png";
import { useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  TextField,
  InputAdornment,
  Button,
  Link,
  Divider,
  Typography,
  FormHelperText,
} from "@mui/material";
import Facebook from "@mui/icons-material/Facebook";
import { blue, grey } from "@mui/material/colors";

export default function LoginBox() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobileEmail, setMobileEmail] = useState("");
  const [helpText, setHelpText] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const inputProps = { fontSize: "12px", border: 0.5, borderColor: grey[400] };
  const inputLabelProps = { fontSize: "12px" };

  const handleSignup = async () => {
    await fetch("https://instagram-clone-36ye.onrender.com/auth/signup", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        mobileEmail: mobileEmail,
        fullName: fullName,
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          navigate("/posts", { replace: true });
        } else {
          setHelpText(data.msg);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <Box sx={{ width: 560 }}>
      <Box
        type="form"
        sx={{
          flexDirection: "column",
          display: "flex",
          border: 1,
          borderColor: grey[400],
          paddingX: 4,
          paddingY: 3,
          marginX: { lg: 14, xs: 4 },
        }}
      >
        <img
          src={logo}
          className="logo-signup"
          alt="logo"
        ></img>
        <Typography
          sx={{ textAlign: "center", color: grey[600], fontWeight: 600 }}
        >
          Sign up to see photos and videos from your friends.
        </Typography>
        <Button
          type="button"
          variant="contained"
          size="small"
          sx={{
            mt: 1,
            borderRadius: 2,

            textTransform: "none",
            fontFamily: "Open Sans,sans-serif",
            fontWeight: 600,
            color: "white",
            background: blue[500],
          }}
        >
          <Facebook sx={{ marginRight: 1 }} />
          Log in with Facebook
        </Button>
        <Divider sx={{ marginY: 1 }}>
          <span
            style={{
              marginLeft: 10,
              marginRight: 10,
              color: grey[700],
              fontSize: 13,
              fontFamily: "Open Sans,sans-serif",
              fontWeight: "600",
            }}
          >
            OR
          </span>
        </Divider>
        <FormControl>
          <TextField
            variant="filled"
            color="dark"
            label="Mobile Number or Email"
            size="small"
            fullWidth
            InputProps={{
              sx: inputProps,
            }}
            onChange={(e) => {
              setMobileEmail(e.target.value);
            }}
            InputLabelProps={{ sx: inputLabelProps }}
          ></TextField>
        </FormControl>
        <FormControl>
          <TextField
            variant="filled"
            label="Full Name"
            InputProps={{ sx: inputProps }}
            size="small"
            fullWidth
            sx={{ marginTop: 1 }}
            onClick={(e) => {
              setFullName(e.target.value);
            }}
            InputLabelProps={{ sx: inputLabelProps }}
          ></TextField>
        </FormControl>
        <FormControl>
          <TextField
            variant="filled"
            color="dark"
            label="Username"
            size="small"
            fullWidth
            InputProps={{
              sx: inputProps,
            }}
            sx={{ marginTop: 1 }}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            InputLabelProps={{ sx: inputLabelProps }}
          ></TextField>
        </FormControl>
        <FormControl>
          <TextField
            type={showPassword ? "text" : "password"}
            variant="filled"
            color="dark"
            label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            size="small"
            fullWidth
            sx={{ marginTop: 1 }}
            InputProps={{
              sx: inputProps,
              endAdornment: (
                <InputAdornment position="end">
                  {/* <IconButton type="button" onClick={handleClickShowPassword}> */}
                  <Link
                    type="button"
                    onClick={handleClickShowPassword}
                    underline="none"
                    sx={{ color: "black", cursor: "pointer" }}
                  >
                    {password.length > 0
                      ? showPassword
                        ? "Hide"
                        : "Show"
                      : ""}
                  </Link>
                  {/* </IconButton> */}
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ sx: inputLabelProps }}
          ></TextField>
        </FormControl>
        <Button
          onClick={handleSignup}
          type="submit"
          size="small"
          variant="contained"
          sx={{
            marginY: 2,
            borderRadius: 2,
            backgroundColor: "#47B5FF",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#47B5FF",
            },
          }}
        >
          Sign up
        </Button>
        <FormHelperText sx={{ color: "red", alignSelf: "center" }}>
          {helpText}
        </FormHelperText>
      </Box>
    </Box>
  );
}
// 42C2FF 0AA1DD 47B5FF 3AB0FF 3AB4F2 47B5FF
