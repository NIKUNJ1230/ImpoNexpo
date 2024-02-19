import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Components/aboute products/components/Header";
import Home from "../Components/aboute products/components/Home";
import Layout from "../Components/aboute products/components/Layout";
import ProductDetails from "../Components/aboute products/components/ProductDetails";
import ShoppingCart from "../Components/aboute products/components/ShoppingCart";
import AddedServices from "../Components/aboute products/components/ShoppingCart/AddedServices";
import Payment from "../Components/aboute products/components/ShoppingCart/Payment";
import QuoteResult from "../Components/aboute products/components/QuoteResult";
import OrderSuccess from "../Components/aboute products/components/ShoppingCart/OrderSuccess";



export default function AbouteProduct() {
    const hideHeader = window.location.pathname === '/quote-result';

    return (<Router>
        {!hideHeader && <Header />}
        <Routes>
            <Route path="/" exact element={<Layout isShowSidebar><Home /></Layout>} />
            <Route path="/product-details/:id" exact element={<Layout><ProductDetails /></Layout>} />
            <Route path="/cart" exact element={<Layout><ShoppingCart /></Layout>} />
            <Route path="/added-services" exact element={<Layout><AddedServices /></Layout>} />
            <Route path="/payment" exact element={<Layout><Payment /></Layout>} />
            <Route path="/order-success" exact element={<Layout><OrderSuccess /></Layout>} />
            <Route path="/quote-result" exact element={<QuoteResult />} />
        </Routes>
    </Router>)
};
