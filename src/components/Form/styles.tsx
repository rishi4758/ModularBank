import Theme from "../../themes/muitheme";
const Style = (theme: typeof Theme) => ({
  //------styling contact us heading in form.tsx file ---------
  heading: {
    color: "#fff",
    fontSize: 48,
    fontWeight: 600,
    fontFamily: "Calibri",
    padding: 15,
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      padding: 0,
      marginBottom: 15,
    },
  },
  offset: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  //------styling form container in form.tsx file ---------
  formContainer: {
    paddingLeft: 120,
    paddingRight: 120,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    paddingTop: 15,
  },

  //------styling  information component in information.tsx file ---------
  textContainer: {
    marginBottom: 30,
  },
  infoEmail: {
    fontSize: 22,
    color: "#DE3C4B",
    fontFamily: "Calibri",
  },

  //------styling  input  component in input.tsx file ---------
  inputContainer: {
    padding: "15px",
    height: "68px",
    [theme.breakpoints.down("sm")]: { marginBottom: 15, padding: "0px" },
  },

  //------styling  select component in select.tsx file ---------
  selectContainer: {
    height: 36,
    width: 380,
    fontWeight: 400,
    background: "#fff",
    backgroundPositionX: "100%",
    backgroundPsitionY: "5px",
    border: 0,
    outline: 0,
    "&:focus": { borderStyle: "none", boxShadow: "none" },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  //------styling  text-areacomponent in textArea.tsx file ---------

  textAreaContainer: {
    padding: 15,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  about: {
    height: 328,
    background: "#fff",
    padding: 8,
    borderRadius: 0,
    width: "700px",
  },
  //------styling  checkBox Container in form.tsx file ---------
  checkboxContainer: {
    padding: 15,
    marginTop: 15,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      marginTop: 15,
    },
  },
});
export default Style;
