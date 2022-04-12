import styled from 'styled-components';
import banner1 from '../../../Assets/Images/banner-1.jpg';
// import banner2 from '../../../Assets/Images/banner-2.jpg';

export const Container = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;
`;

export const Card1 = styled.div`
    width: 30%;
    background-image: url(${banner1});

    display: flex;

    justify-content: center;
    align-items: center;
    height: 60vh;
    padding: 20px;
`;

export const SubCard = styled.div`
    width: 100%;
    color: white;
    border: solid 4px white;
    padding: 0 20px;
    height: 100%;

    display: flex;

    align-items: center;
`;
export const Card2 = styled.div`
    height: 44%;
    width: 70vh;
    background-image: url(${(props) => props.bg});
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
