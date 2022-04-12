import React from 'react';
import image1 from '../../../Assets/Images/product1.jpg';
import image2 from '../../../Assets/Images/product2.jpg';
import image3 from '../../../Assets/Images/banner-4.jpg';

function Section5() {
    return (
        <>
            <div className="flex justify-center m-5   h-screen ">
                <div className="col-1 flex flex-col justify-center">
                    <div className="flex flex-col ">
                        <p className="text-center text-red-800">SPECIAL</p>
                        <h1 className="text-center text-3xl">
                            Refine Your Style
                        </h1>
                        <br></br>
                        <p>
                            Get on our exclusive emial list and be the first to
                            hear
                        </p>

                        <p>about sales,coupones,new arrivals and more!!</p>
                    </div>
                    <br></br>
                    <div className="flex ...">
                        <div className="flex flex-col m-2">
                            <img className="w-40 mb-5" src={image1} alt="" />
                            <span>Boots,Shoes,Women</span>
                            <span>Sandals Cool</span>
                            <span>Now $337.00</span>
                            <span>Now $337.00</span>
                        </div>
                        <div className="flex flex-col m-2">
                            <img className="w-40 mb-5" src={image2} alt="" />
                            <span>Boots,Shoes,Women</span>
                            <span>Sandals Cool</span>
                            <span>Now $337.00</span>
                            <span>Now $337.00</span>
                        </div>
                    </div>
                </div>
                <div className="col-2 m-5">
                    <div
                        className="h-full w-auto  flex flex-col justify-center p-5 text-white"
                        style={{
                            backgroundImage: `url(${image3})`,
                            backgroundSize: 'contain',

                            backgroundRepeat: 'no-repeat',

                            width: '500px'
                        }}
                    >
                        {/* <img src={image3} alt="" /> */}
                        <p className="text-2xl font-extrabold">
                            Casual basics{'\n'} and trendy key pieces
                        </p>
                        <br></br>
                        <p>IN THIS LOOK</p>
                        <ul>
                            <li>Rib-knit cardigan</li>
                            <li>Linien-blend paper</li>
                        </ul>
                        <br></br>
                        <p>$19.99-$48.00</p>
                    </div>
                    <div className="divide-y divide-blue-200"></div>
                </div>
            </div>
        </>
    );
}

export default Section5;
