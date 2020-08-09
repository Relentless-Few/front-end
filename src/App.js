import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import Header from "./Header/Header";
import theme from "./materialui/theme/theme";
import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import PrivateRoute from "./auth/PrivateRoute";
import PostContainer from './components/PostContainer';
import CreateOrgForm from "./components/forms/CreateOrgForm";
import CreateTeamForm from "./components/forms/CreateTeamForm";
import JoinOrgForm from "./components/forms/JoinOrgForm";
import JoinTeamForm from "./components/forms/JoinTeamForm";
import PostForm from "./components/forms/PostForm";
import CommentForm from "./components/forms/CommentForm";
import NotificationPanel from "./components/NotificationPanel";
import ChatPanel from "./components/ChatPanel";

function App(props) {
  console.log("API: ", process.env.REACT_APP_BASE_API_URL);
  console.log("WS: ", process.env.REACT_APP_BASE_WS_URL);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <NotificationPanel />
        <ChatPanel />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={PostContainer} />
          <Route path="/createorg" component={CreateOrgForm} />
          <Route path="/createteam" component={CreateTeamForm} />
          <Route path="/joinorg" component={JoinOrgForm} />
          <Route path="/jointeam" component={JoinTeamForm} />
          <Route path="/createpost" component={PostForm} />
          <Route path="/createcomment" component={CommentForm} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
        {/* <ChatPanel /> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
