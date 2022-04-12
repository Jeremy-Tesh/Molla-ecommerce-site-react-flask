import { ArrowCircleRightSharp } from '@mui/icons-material';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import {
    TopContainer,
    Container,
    TitleContainer,
    LeftContainer,
    RightContainer,
    Price,
    Quantity,
    Total,
    Wrapper,
    CheckOut,
    Title,
    Content,
    ProductImg,
    SubTitle,
    InputField,
    ArrowButton,
    CartTitle
} from './style';
let Data = [
    {
        name: 'FreeShipping',
        price: '$0'
    },
    {
        name: 'Standard',
        price: '$10'
    },
    {
        name: 'Express',
        price: '$20'
    }
];
function Cart() {
    return (
        <Container>
            <TopContainer>
                <Typography variant="h4">Shopping Cart</Typography>
                <Typography color="brown" variant="h6"></Typography>
            </TopContainer>
            <Wrapper>
                <TitleContainer>
                    <LeftContainer>
                        <Title>Products</Title>
                        <Content>
                            <ProductImg />
                            <Typography
                                style={{
                                    fontSize: '14px'
                                }}
                            >
                                Beige ring handle circle cross body bag
                            </Typography>
                        </Content>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                                justifyContent: 'center',
                                marginLeft: '20px'
                            }}
                        >
                            <InputField placeholder="cupone code" />
                            <ArrowButton>
                                <ArrowCircleRightSharp />
                            </ArrowButton>
                        </div>
                    </LeftContainer>
                    <RightContainer>
                        <Price>
                            <Title>Price</Title>
                            <SubTitle>$55</SubTitle>
                        </Price>
                        <Quantity>
                            <Title>Quantity</Title>
                            <SubTitle>4</SubTitle>
                        </Quantity>
                        <Total>
                            <Title>Total</Title>
                            <SubTitle>$3000</SubTitle>
                        </Total>
                    </RightContainer>
                </TitleContainer>
                <Paper>
                    <CheckOut>
                        <CartTitle>Cart Total</CartTitle>
                        <div
                            className="flex justify-between px-2 py-3
                         "
                        >
                            <Typography>Sub Total</Typography>
                            <Typography>$385.00</Typography>
                        </div>
                        {Data.map((data) => (
                            <div
                                className="flex justify-between px-2 py-3
                            "
                            >
                                <div
                                    className="flex  w-full items-center
                               "
                                >
                                    <input
                                        className="mx-3 cursor-pointer"
                                        type="radio"
                                    />
                                    <p>{data.name}</p>
                                </div>
                                <p>{data.price}</p>
                            </div>
                        ))}
                        <Typography>Estimate for your contry</Typography>
                        <TextField
                            id="standard-basic"
                            label="change adress"
                            variant="standard"
                        />
                        <div
                            className="flex justify-between px-2 py-3
                         "
                        >
                            <Typography>Total</Typography>
                            <Typography>$405.00</Typography>
                        </div>

                        <Button>
                            <Link to="/checkout">Procced to CheckOut </Link>
                        </Button>

                        <Button>
                            <Link to="/"> Continue Shopping</Link>
                        </Button>
                    </CheckOut>
                </Paper>
                {/* <CartButton color={'red'}>hello</CartButton> */}
            </Wrapper>
        </Container>
    );
}

export default Cart;
