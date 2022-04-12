import { ShoppingCart, Star } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import {
    Container,
    ParentContainer,
    FirstDiv,
    SecondDiv,
    ThirdDiv,
    Title,
    SubTitle
} from './style';
const Data = [
    {
        price: '$20 - $30',
        subTitle: 'Beige metal hoop tote bag',
        id: 1,
        name: 't-shirt',
        imgUrl: 'https://d-themes.com/angular/molla/server/uploads/product_1_2_300x300_4d585cfd35.jpg',
        desc: 'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus.'
    },
    {
        price: '$50 -$60',
        subTitle: 'Beige ring handle circle cross body bag ',
        id: 2,
        name: 'jacket',
        imgUrl: 'https://d-themes.com/angular/molla/server/uploads/2_a2ee45417a.jpg',
        desc: 'Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar n'
    },
    {
        price: '$70 - $80',
        subTitle: 'Beige V neck button cardigan',
        id: 3,
        name: 'Hoodie',
        imgUrl: 'https://d-themes.com/angular/molla/server/uploads/product_2_1_f64862c43b.jpg',
        desc: 'Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar n'
    },
    {
        price: '$40 - $50',
        subTitle: 'Black denim dungaree dress',
        id: 4,
        name: 'sweater',
        imgUrl: 'https://d-themes.com/angular/molla/server/uploads/product_5_4_300x190_ae766268aa.jpg',
        desc: 'Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar n'
    },
    {
        price: '$20 - $40',
        subTitle: '',
        id: 5,
        name: 'dress',
        imgUrl: 'https://d-themes.com/angular/molla/server/uploads/2_2_7dc0f060e6.jpg',
        desc: 'Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar n'
    },
    {
        price: '$30 - $60',
        subTitle: 'Black faux leather chain trim sandals',
        id: 6,
        name: 'mini-Skirt',
        imgUrl: 'https://d-themes.com/angular/molla/server/uploads/6_6d9a6a354b.jpg',
        desc: 'Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar n'
    },
    {
        price: '$10- $30',
        id: 7,
        name: 'children ',
        imgUrl: 'https://d-themes.com/angular/molla/server/uploads/2_c5b26b1154.jpg',
        subTitle: 'Brown faux fur longline coat '
    }
];
function Right() {
    return (
        <ParentContainer>
            {Data.map((data) => (
                <Container>
                    <FirstDiv img={data.imgUrl}></FirstDiv>
                    <SecondDiv>
                        <p>Women </p>
                        <Title>{data.subTitle}</Title>
                        <SubTitle variant="p">{data.desc}</SubTitle>
                    </SecondDiv>
                    <ThirdDiv>
                        <p>{data.price}</p>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <Star /> <Star /> <Star /> <Star /> <Star />
                            <p>(5 review)</p>
                        </div>
                        <Button
                            fullWidth
                            style={{
                                border: '1px solid red',
                                borderRadius: '0px',
                                color: 'red'
                            }}
                        >
                            <ShoppingCart /> Add to Cart
                        </Button>
                    </ThirdDiv>
                </Container>
            ))}
        </ParentContainer>
    );
}

export default Right;
