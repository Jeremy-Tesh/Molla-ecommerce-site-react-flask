import React from 'react';
import { Container } from './style';
import product1 from '../../../Assets/Images/product1.jpg';
import product2 from '../../../Assets/Images/product2.jpg';
import product3 from '../../../Assets/Images/product3.jpg';
import product4 from '../../../Assets/Images/product4.jpg';
import HomeCard from '../../../components/HomeCard/homeCard';
// import product5 from '../../../Assets/Images/product5.jpg';
export const cards = [
    {
        id: 1,
        image: product1,
        catagory: 'Boots,Shoes,Women',
        type: 'Scandals Cool',
        now: '$337.00',
        was: '$449.00'
    },
    {
        id: 2,
        image: product2,
        catagory: 'Boots,Shoes,Women',
        type: 'Scandals Cool',
        now: '$337.00',
        was: '$449.00'
    },
    {
        id: 3,
        image: product3,
        catagory: 'Boots,Shoes,Women',
        type: 'Scandals Cool',
        now: '$337.00',
        was: '$449.00'
    },
    {
        id: 4,
        image: product4,
        catagory: 'Boots,Shoes,Women',
        type: 'Scandals Cool',
        now: '$337.00',
        was: '$449.00'
    }
    // {
    //     image: product5,
    //     catagory: 'Boots,Shoes,Women',
    //     type: 'Scandals Cool',
    //     now: '$337.00',
    //     was: '$449.00'
    // }
];

function Section3() {
    return (
        <>
            <Container>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <h1 className="text-3xl font-bold">Trendy Products</h1>
                    <ul style={{ display: 'flex' }}>
                        <li>ALL</li>
                        <li>WOMEN</li>
                        <li>MEN</li>
                        <li>ACCESSORIES</li>
                    </ul>
                </div>
                <div className="flex flex-wrap justify-center ">
                    {cards.map((item) => (
                        <HomeCard image={item.image} key={item.id} />
                    ))}
                </div>
            </Container>
        </>
    );
}

export default Section3;
