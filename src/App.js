import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Result from "./routes/Result";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/result"} element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
