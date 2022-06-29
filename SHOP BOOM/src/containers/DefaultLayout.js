import React from "react";
import Header from "./Header";
import Home from "../pages/Home";
import Women from "../pages/Women";
import Children from "../pages/Children";
import Men from "../pages/Men";
import Gioithieu from "../pages/Gioithieu";
import Lienhe from "../pages/Lienhe";
import Baohanh from "../pages/Baohanh";
import { Routes, Route } from "react-router-dom";

function DefaultLayout() {
  return (
    <>
      <Header />;
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="women" element={<Women />} />
        <Route path="children" element={<Children />} />
        <Route path="men" element={<Men />} />
        <Route path="gioithieu" element={<Gioithieu />} />
        <Route path="lienhe" element={<Lienhe />} />
        <Route path="baohanh" element={<Baohanh />} />
      </Routes>
    </>
  );
}

export default DefaultLayout;
