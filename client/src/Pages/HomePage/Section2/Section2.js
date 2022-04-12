import React from 'react';
import { Container, Card1, SubCard, Card2 } from './style';
import banner2 from '../../../Assets/Images/banner-2.jpg';
import banner3 from '../../../Assets/Images/banner-3.jpg';

function Section2() {
    return (
        <>
            <Container className="flex-wrap">
                <Card1>
                    <SubCard>
                        <div>
                            <h3>Trending now</h3>
                            <h1 className="text-xl font-bold">
                                This Week's/n Most Wanted
                            </h1>
                            <h3>Discover Now</h3>
                        </div>
                    </SubCard>
                </Card1>
                <div className="card-row-2" style={{ height: '70vh' }}>
                    <Card2 bg={banner2}>
                        <div className="sub-card">
                            <p>Limited time only</p>
                            <h1 className="text-xl font-bold">
                                Trainers & Sportwear
                            </h1>
                            <h3>SHOP NOW</h3>
                        </div>
                    </Card2>
                    <Card2 bg={banner3}>
                        <div className="sub-card">
                            <p>Limited time only</p>
                            <h1 className="text-xl font-bold">
                                Trainers & Sportwear
                            </h1>
                            <h3>SHOP NOW</h3>
                        </div>
                    </Card2>
                </div>
            </Container>
        </>
    );
}

export default Section2;
