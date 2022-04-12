import React from 'react';
import product1 from '../../../Assets/Images/product1.jpg';
import product2 from '../../../Assets/Images/product2.jpg';
import product3 from '../../../Assets/Images/product3.jpg';
import product4 from '../../../Assets/Images/product4.jpg';
import HomeCard from '../../../components/HomeCard/homeCard';
import { ReactComponent as Fb } from '../../../Assets/Icons/facebook.svg';
import { ReactComponent as Twitter } from '../../../Assets/Icons/twitter.svg';
import { ReactComponent as Insta } from '../../../Assets/Icons/instagram.svg';
import { ReactComponent as Pin } from '../../../Assets/Icons/pinterest.svg';
const cards = [
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
];

function Section6() {
    return (
        <>
            <div>
                <p className="text-center font-extrabold text-3xl">
                    {' '}
                    New Arrivals
                </p>
                <div className="flex flex-wrap justify-center ">
                    {cards.map((item) => (
                        <HomeCard image={item.image} key={item.id} />
                    ))}
                </div>
                <div className="flex justify-center text-red-700 ">
                    <button className="border-solid">LOAD MORE</button>
                </div>
                <br></br>
                <br></br>
                <p className="text-center font-extrabold text-2xl">
                    Shop Social
                </p>
                <p className="text-center">
                    loreSunt pariatur pariatur dolore id labore ex voluptate do
                    occaecat. Officia nisi aliquip ex aute nisi adipisicing anim
                </p>
                <div className="flex  justify-center mt-5 mb-10 ">
                    <Fb className="mr-2 " />
                    <Twitter className="mr-2 " />
                    <Insta className="mr-2 " />
                    <Pin className="mr-2 " />
                </div>

                <hr></hr>
            </div>
        </>
    );
}

export default Section6;
