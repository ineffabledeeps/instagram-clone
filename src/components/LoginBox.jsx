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

export default function SignupBox() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [helpText, setHelpText] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const inputProps = { fontSize: "12px", border: 0.5, borderColor: grey[400] };
  const inputLabelProps = { fontSize: "12px" };

  const handleLogin = async () => {
    await fetch("https://instagram-clone-36ye.onrender.com/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        // "X-CSRF-Token":
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: username,
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
    <Box sx={{ width: 550 }}>
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
        <img src={logo} className="logo" alt="logo"></img>
        <FormControl>
          <TextField
            variant="filled"
            color="dark"
            label="Phone Number, email or username"
            size="small"
            fullWidth
            InputProps={{
              sx: inputProps,
            }}
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
          onClick={handleLogin}
          type="submit"
          size="small"
          variant="contained"
          sx={{
            marginTop: 2,
            borderRadius: 2,
            backgroundColor: "#47B5FF",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#47B5FF",
            },
          }}
        >
          Log in
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
        <Button
          type="button"
          size="small"
          sx={{
            mt: 1,
            textTransform: "none",
            fontFamily: "Open Sans,sans-serif",
            fontWeight: "600",
            color: blue[900],
            background: "transparent",
          }}
        >
          <Facebook sx={{ marginRight: 1 }} />
          Log in with Facebook
        </Button>
        <FormHelperText sx={{ color: "red", alignSelf: "center" }}>
          {helpText}
        </FormHelperText>
        <Link
          mt={1}
          sx={{
            alignSelf: "center",
            color: "black",
            fontFamily: "Open Sans,sans-serif",
          }}
          variant="caption"
          underline="none"
        >
          Forgot password?
        </Link>
      </Box>
      <Box
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          display: "flex",
          border: 1,
          borderColor: grey[400],
          padding: 2,
          marginX: { lg: 14, xs: 4 },
          marginTop: 1.5,
          maxWidth: "100%",
        }}
      >
        <Typography sx={{ fontWeight: "normal", fontSize: "14px" }}>
          Don't have an account?
        </Typography>
        <Link
          href="/accounts/signup"
          underline="none"
          sx={{ ml: 1, fontSize: "14px", fontWeight: 600, color: blue[500] }}
        >
          Sign up
        </Link>
      </Box>
    </Box>
  );
}
// 42C2FF 0AA1DD 47B5FF 3AB0FF 3AB4F2 47B5FF
