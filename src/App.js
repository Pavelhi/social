import logo from "./logo.svg";
import "./App.css";
import "./Components/Header/Header.css";
import "./Components/Navbar/Navbar.css";
import "./Components/Profile/Profile.css";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/dialogs/Dialogs";
import Navbar from "./Components/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/dialogs" component={Dialogs} />
        </Switch>

        <Profile />
      </BrowserRouter>
    </div>
  );
}

export default App;
