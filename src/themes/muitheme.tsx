import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 400,
      sm: 762,
      md: 763,
      lg: 1280,
      xl: 1920,
    },
  },
});

theme.overrides = {
  MuiMenuItem: {
    root: {
      fontSize: 14,
      display: "flex",

      "&:hover": {
        color: "#fff",
        backgroundColor: "#3d517d",
      },
    },
  },
  MuiButton: {
    disabled: { opacity: 0.6 },
    root: {
      height: 52,
      width: 90,
      textTransform: "none",
      backgroundColor: "#DE3C4B",
      borderRadius: 0,
      padding: "13px",
      "&:hover": { backgroundColor: "#DE3C4B" },
    },
    label: {
      color: "#fff",
      fontWeight: 400,
      fontSize: 20,
      fontFamily: "Calibri",
    },
  },
  MuiMenu: {
    paper: {
      maxHeight: "330px",
      width: "295px",
      borderRadius: 0,
      padding: 0,
      margin: 0,
      marginTop: 10,

      [theme.breakpoints.down("sm")]: {
        maxHeight: "350px",
        width: "90%",
      },
      background: "#fff",
    },
  },
  MuiSelect: {
    select: {
      height: 36,
      padding: 0,
      position: "relative",
      display: "flex",
      alignItems: "center",
      "&:focus": { backgroundColor: "#fff" },

      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    outlined: {
      height: 24,
      fontSize: 15,
      fontFamily: "Calibri",
      fontStyle: "normal",
      background: "#fff",
      borderRadius: 0,
      borderWidth: 0,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
    icon: { color: "#000" },
  },
  MuiOutlinedInput: {
    root: {
      height: 36,
      width: 380,
      fontSize: 15,
      fontFamily: "Calibri",
      fontStyle: "normal",
      background: "#fff",
      borderRadius: 0,
      borderWidth: 0,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
    input: {
      height: 0,
    },
  },

  MuiCheckbox: {
    root: {
      padding: 0,
      height: 24,
      width: 24,
      border: "4px solid #00",
      boxSizing: "border-box",
      borderRadius: 0,
      backgroundColor: "#fff",
      "&:hover": { backgroundColor: "#fff" },
      [theme.breakpoints.down("sm")]: {
        marginBottom: 10,
      },
    },
    checked: {
      backgroundColor: "#fff",
      color: "#fff",
      "&:hover": { backgroundColor: "#fff" },
    },
  },
  MuiInputLabel: {
    root: {
      fontFamily: "Calibri",
      fontStyle: "normal",
      height: 24,
      fontSize: 15,
      fontWeight: 10,
      color: "#fff",
    },
  },
  MuiTypography: {
    root: {
      fontFamily: "Calibri",
      fontStyle: "normal",
    },
    h4: {
      fontSize: 20,
      lineHeight: 1.5,
      color: "#fff",
      fontWeight: 400,
    },
    subtitle2: {
      marginLeft: 12,
      color: "#fff",
      fontWeight: 400,
      fontSize: 13,
    },
  },
  MuiLink: {
    root: {
      fontFamily: "Calibri",
      fontStyle: "normal",
      color: "#DE3C4B",
      cursor: "pointer",
      marginLeft: 4,
    },
  },
};

export default theme;
