import React from 'react';
import Home from './Pages/HomePage/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ShopPage from './Pages/ShopPage/Shop';
import Cart from './components/Cart/Cart';
import { Route, Routes, useLocation } from 'react-router-dom';
import CheckOut from './components/CheckOut/Checkout';

import './App.css';
import Login from './Pages/LoginPage/login';
import SignUp from './Pages/SignUp/signup';
import Text from './text';

function App() {
    let history = useLocation();
    console.log(history.pathname);
    return (
        <div className={history.pathname === '/' ? 'app-container' : 'app'}>
            {/* <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shoppage" element={<ShopPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
            <Footer /> */}
            <Text />
        </div>
    );
}
export default App;
