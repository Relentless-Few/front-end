import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import Header from "./Header/Header";
import theme from "./materialui/theme/theme";
import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import PrivateRoute from "./auth/PrivateRoute";

// You can remove all the state components, button and click events once state is starting to be built
function App(props) {
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
