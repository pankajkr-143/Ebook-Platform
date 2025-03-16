import React from "react";
import HomePage from "./HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import FlashSales from "./component/FlashSale/FlashSale";
import Category from "./component/Category/Category";
import AdsBox from "./component/AdsBox/AdsBox";
import ProductList from "./component/ExploreProduct/ProductList";
import BookCollection from "./component/BookCollection/BookCollection";
import BookList from "./component/Footer/bookList/bookList";
import Footer from "./component/FooterSection/footer";
import { AuthProvider } from "./store/auth";
import HeartPage from "./heartPage";
import CartBoxPage from "./cartBoxPage";
import Signup from "./signup";
import Login from "./login";
import {Logout} from "./logout";
import { useState } from 'react';
import LoginPopup from './component/LoginPopup/LoginPopup';

const App = () => {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <FlashSales />
                <Category />
                <BookList />
                <AdsBox />
                <ProductList />
                <BookCollection />
                <Footer />
              </>
            }
          />

          <Route path="/heartPage" element={<HeartPage />} />
          <Route path="/cartBoxPage" element={<CartBoxPage />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />}/>

  );
};

export default App;
