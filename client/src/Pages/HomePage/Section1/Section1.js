import { Button, Typography } from '@mui/material';
import React from 'react';
import Image2 from '../../../Assets/Images/2.png';
import Image3 from '../../../Assets/Images/2.png';
import Image4 from '../../../Assets/Images/3.png';
import Image5 from '../../../Assets/Images/4.png';
import Image6 from '../../../Assets/Images/5.png';
import Image7 from '../../../Assets/Images/6.png';
import { Container } from './style';

const brandLogos = [Image2, Image3, Image4, Image5, Image6, Image7];

function Section1() {
    return (
        <>
            <Container className="flex flex-col justify-center items-center text-white -mt-20 ">
                <div
                    className="motto-text"
                    style={{ color: 'white', textAlign: 'center' }}
                >
                    <Typography
                        fontFamily="fantasy
                    "
                        fontWeight="100"
                        variant="h5"
                    >
                        Don't Miss
                    </Typography>
                    <Typography
                        style={{
                            fontFamily: 'flaming-regular',
                            fontSize: '100px'
                        }}
                    >
                        Mystery Deals
                    </Typography>
                    <Typography
                        variant="h5"
                        fontFamily="fantasy"
                        fontWeight="100"
                    >
                        Online Only
                    </Typography>
                    <Button
                        style={{
                            padding: '10px 30px',
                            margin: '20px 0px',
                            borderRadius: '30px'
                        }}
                        color="inherit"
                        variant="outlined"
                    >
                        Discover Now
                    </Button>
                </div>
            </Container>
            <div className="flex justify-center overflow-auto hover:overflow-scroll">
                {brandLogos.map((logo, id) => (
                    <div
                        className="brand-images-row "
                        key={id}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minWidth: '271px',
                            height: '99px',
                            border: 'solid grey 1px'
                        }}
                    >
                        <img src={logo} alt="image1" />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Section1;
