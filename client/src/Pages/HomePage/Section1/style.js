import styled from 'styled-components';
import img from '../../../Assets/Images/slide-1.jpg';

export const Container = styled.div`
    top: -70px;

    background-image: url(${img}); 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`;

export const BrandLogo = styled.div`
    display: flex;
`;
