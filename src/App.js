import logo from "./logo.svg";
import "./App.css";
import "./Components/Header/Header.css";
import "./Components/Navbar/Navbar.css";
import "./Components/Profile/Profile.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;