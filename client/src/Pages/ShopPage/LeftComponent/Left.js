import { Slider, Typography } from '@mui/material';
import React from 'react';
import {
    Container,
    Wrapper,
    P,
    Input,
    ColorContainer,
    WrapperRow
} from './style';

const Data = [
    {
        name: 'Furniture',
        quantity: 8
    },
    {
        name: 'Coffee & Tables',
        quantity: 1
    },
    {
        name: 'Lighting',
        quantity: 3
    },
    {
        name: 'Decoretion',
        quantity: 5
    },
    {
        name: 'Electronics',
        quantity: 4
    },
    {
        name: 'Beds',
        quantity: 4
    },
    {
        name: 'ArmChair & Chaises',
        quantity: 5
    },
    {
        name: 'Sofa',
        quantity: 6
    }
];
const Size = ['ExtraSmall', 'Small', 'Medium', 'Large', 'Extra Large'];
const Color = ['red', 'blue', 'black', 'brown', 'yellow', 'grey', 'firebrick'];
const Brand = [
    'Next',
    'River Island',
    'Geox',
    'New Balance',
    'UGG',
    'F&F',
    'Nike'
];
function Left() {
    return (
        <Container>
            <Wrapper>
                <Typography underline variant="h5">
                    Categorys
                </Typography>
                {Data.map((data) => (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <P>{data.name}</P>
                        <P>{data.quantity}</P>
                    </div>
                ))}
            </Wrapper>
            <Wrapper>
                <Typography
                    style={{
                        marginBottom: '10px'
                    }}
                    variant="h5"
                >
                    Size
                </Typography>
                {Size.map((size) => (
                    <div
                        style={{
                            display: 'flex',
                            marginTop: '5px'
                        }}
                    >
                        <Input type="checkbox" />
                        <Typography>{size}</Typography>
                    </div>
                ))}
            </Wrapper>
            <Typography variant="h5">Color</Typography>
            <WrapperRow>
                {Color.map((color) => (
                    <ColorContainer color={color}></ColorContainer>
                ))}
            </WrapperRow>
            <Wrapper>
                <Typography
                    style={{
                        marginBottom: '10px'
                    }}
                    variant="h5"
                >
                    Brand
                </Typography>
                {Brand.map((brand) => (
                    <div
                        style={{
                            display: 'flex',
                            marginTop: '5px'
                        }}
                    >
                        <Input type="checkbox" />
                        <Typography>{brand}</Typography>
                    </div>
                ))}
            </Wrapper>
            <Wrapper>
                <Typography
                    style={{
                        marginBottom: '20px'
                    }}
                    variant="h5"
                >
                    Price
                </Typography>
                <div
                    style={{
                        marginBottom: '20px'
                    }}
                >
                    <Typography>
                        Price Range{' '}
                        <span
                            style={{
                                colr: 'red'
                            }}
                        >
                            $100 - $200
                        </span>
                    </Typography>
                </div>

                <Slider />
            </Wrapper>
        </Container>
    );
}

export default Left;
