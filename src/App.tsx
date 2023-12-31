import React from "react";
import "./common.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          return (
            <Route key={route.path} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
