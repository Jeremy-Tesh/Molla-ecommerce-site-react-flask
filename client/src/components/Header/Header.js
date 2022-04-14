import { ArrowDropDown, Favorite, ShoppingCart } from '@mui/icons-material';
import { Badge, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavContainer, Navs, Logo, SearchContainer } from './style';
import logo from '../../Assets/Icons/logo.png';
function Header() {
    const [navBar, setNavColor] = useState(false);

    function usePageViews() {
        let location = useLocation();

        useEffect(() => {
            if (location.pathname === '/') {
                window.addEventListener('scroll', changeColor);
                changeColor();
            } else setNavColor(true);
            return () => {
                window.removeEventListener('scroll', changeColor);
            };
        }, [location]);
    }

    const changeColor = () => {
        if (window.scrollY >= 70) {
            setNavColor(true);
        } else setNavColor(false);
    };

    usePageViews();

    return (
        <div
            className={
                navBar
                    ? 'h-20 z-10 top-0 sticky transition-all items-center border-solid flex align-middle bg-gray-700 text-white px-10'
                    : 'h-20 z-10 top-0 sticky transition-all  items-center border-solid flex align-middle bg-transparent text-white px-10'
            }
        >
            <Logo>
                <Link
                    style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}
                    to="/"
                >
                    <img
                        className="w-[104px] h-[26px] my-5"
                        src={logo}
                        alt=""
                    />
                </Link>
            </Logo>

            <NavContainer>
                <Navs>
                    Home <ArrowDropDown />
                </Navs>
                <Navs>
                    <Link
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}
                        to="/shoppage"
                    >
                        {' '}
                        Shop
                    </Link>

                    <ArrowDropDown />
                </Navs>
                <Navs>
                    Products
                    <ArrowDropDown />
                </Navs>
                <Navs>
                    Pages
                    <ArrowDropDown />
                </Navs>
                <Navs>
                    Blog
                    <ArrowDropDown />
                </Navs>
            </NavContainer>
            <SearchContainer>
                <TextField
                    style={{
                        color: 'red',
                        borderBottom: '1px solid white'
                    }}
                    label="Search"
                    variant="standard"
                />
                <Favorite />
                <Badge badgeContent={4} color="primary">
                    <Link
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}
                        to="cart"
                    >
                        <ShoppingCart />
                    </Link>
                </Badge>
            </SearchContainer>
        </div>
    );
}

export default Header;
