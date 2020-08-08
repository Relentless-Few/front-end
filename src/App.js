import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import Header from "./Header/Header";
import theme from "./materialui/theme/theme";
import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import PrivateRoute from "./auth/PrivateRoute";

function App(props) {
  console.log("API: ", process.env.REACT_APP_BASE_API_URL);
  console.log("WS: ", process.env.REACT_APP_BASE_WS_URL);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
