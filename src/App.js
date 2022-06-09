//Pages
import Home from "./pages/Home";
//
import GlobalStyles from "./components/GlobalStyles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue, red } from "@material-ui/core/colors";
//router
import { Switch, Route } from "react-router-dom";
//motion
function App() {
  return (
    <>
      {/* <Switch> */}
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Route path={("/moviedetails/:id", "/tvdetails/:id", "/")}>
          <Home />
        </Route>
      </ThemeProvider>
      {/* </Switch> */}
    </>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[900],
    },
    secondary: {
      main: blue[50],
    },
  },
});

export default App;
