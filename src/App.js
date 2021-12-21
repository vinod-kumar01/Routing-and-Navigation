import logo from "./logo.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Routing App</h1>
      <Link to="/home">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/about">About</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/other">Other</Link>
      <Outlet />
    </div>
  );
}

export default App;
