import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import Header from "./Header/Header";
import theme from "./materialui/theme/theme";
import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import PrivateRoute from "./auth/PrivateRoute";
import PostContainer from './components/PostContainer';
import CreateOrgForm from "./components/CreateOrgForm";
import CreateTeamForm from "./components/CreateTeamForm";
import JoinOrgForm from "./components/JoinOrgForm";
import JoinTeamForm from "./components/JoinTeamForm";

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
          <Route path="/post" component={PostContainer} />
          <Route path="/createorg" component={CreateOrgForm} />
          <Route path="/createteam" component={CreateTeamForm} />
          <Route path="/joinorg" component={JoinOrgForm} />
          <Route path="/jointeam" component={JoinTeamForm} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
