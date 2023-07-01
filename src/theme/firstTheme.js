import { createTheme } from "@mui/material";

const firstTheme = createTheme({
  palette: {
    dark: "black",
    instaBlue: "47B5FF",
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "&:before, &:after": {
            borderBottom: "none",
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "none",
          },
          borderRadius: 5,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "inherit",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          "&:after,&:before": {
            borderWidth: "1.5px",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Open Sans,sans-serif",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "Open Sans,sans-serif",
        },
      },
    },
  },
});

export default firstTheme;
