import Theme from "./themes/muitheme";
import { ThemeProvider } from "@material-ui/core";
import Router from "./routes";
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
