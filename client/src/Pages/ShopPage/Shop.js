import { Typography } from '@mui/material';
import React from 'react';
import Left from './LeftComponent/Left';
import Right from './RightContainer/Right';
import { Container, TopContainer, Wrapper } from './style';
function Shop() {
    return (
        <Container>
            <TopContainer>
                <Typography variant="h4">List</Typography>
                <Typography color="brown" variant="h6">
                    Shop
                </Typography>
            </TopContainer>
            <Wrapper>
                <Left />
                <Right />
            </Wrapper>
        </Container>
    );
}

export default Shop;
