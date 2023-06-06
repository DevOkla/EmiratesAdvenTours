import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
// import pages

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Packages from "./pages/Packages";
import Chill from "./pages/Chill";
export default function App() {
  return (
    <>
      <Router>
        <ScrollTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />}></Route>
          <Route path="/pages/packages" element={<Packages />}></Route>
          <Route path="/pages/chill" element={<Chill />}></Route>
        </Routes>
      </Router>
    </>
  );
}
