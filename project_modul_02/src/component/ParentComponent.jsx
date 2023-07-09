import React from "react";
import HeaderPage from "./Layout/Hearder/HeaderPage";
import HomePage from "./Main/Homepage/HomePage";
import DetailPage from "./Main/DetailPage/DetailPage";
import CartPage from "./Main/Cart/CartPage";
import FooterPage from "./Layout/Footer/FooterPage";
import ProductPage from "./Main/ProductPage/ProductPage";
import CommentsPage from "./Main/Comments/CommentsPage";
import LoginPage from "./login-sigin/Login/LoginPage";
import SiginPage from "./login-sigin/Sigin/SiginPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import LoginnPage from "./login-sigin/Login/LoginnPage";

function ParentComponent() {

  return (
    <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="117">
      <Routes>
        <Route path="/sigin" element={<SiginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/comments" element={<CommentsPage />} />
      </Routes>
    </div>
  );
}

export default ParentComponent;
