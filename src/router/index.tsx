import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HomePage from "../pages/home";
import Faq from "../pages/faq";
import HelpLinks from "../pages/help-links";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" key="home" element={<HomePage />} />
        <Route path="/faq" key="faq" element={<Faq />} />
        <Route path="/links" key="links" element={<HelpLinks />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
