import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Packages from "./pages/Packages";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/*" element={<NotFound />} />
          <Route path="/pages/packages" element={<Packages />}></Route>
        </Routes>
      </Router>
    </>
  );
}
