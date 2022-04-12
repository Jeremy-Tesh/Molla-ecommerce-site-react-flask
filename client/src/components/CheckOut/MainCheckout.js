import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';
import PaymentForm from './PaymentForm';
import Review from './Review';
function MainCheckout() {
    return (
        <Routes>
            <Route path="/" element={<Checkout />} />
            <Route path="/payment" element={<PaymentForm />} />
            <Route path="/review" element={<Review />} />
        </Routes>
    );
}

export default MainCheckout;
