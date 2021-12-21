import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  Route,
  Routes,
  Redirect,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home";
import Other from "./Components/Other";
import About from "./Components/About";
import Settings from "./Components/Settings";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";

const ProtectedRoute = ({ component }) => {
  const isLoggedIn = true;
  return isLoggedIn ? component : <Navigate to="/login" />;
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute component={<App />} />}>
          <Route path="home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="about" element={<About />} />
          <Route path="other" element={<Other />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
