import React from "react";
import Home from "../Pages/Home";
import Support from "../Pages/Support";
import Solution from "../Pages/Solution";
import Services from "../Pages/Services";
import Deals from "../Pages/Deals";
import FindAStore from "../Pages/FindAStore";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import Cart from "../Pages/Cart";
import APEX from "../Pages/APEX";
import AboutUs from "../Pages/AboutUs";
import Products from "../Pages/Products";
import SingleProductPage from "../Pages/SingleProductPage";
import SignUp from "../Pages/SignUp";
import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/solution" element={<Solution />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/deals" element={<Deals />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/apex" element={<APEX />}></Route>
        <Route path="/findastore" element={<FindAStore />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<SingleProductPage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
