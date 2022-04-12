import styled from 'styled-components';
import bg from '../../../Assets/Images/bg-2.jpg';

export const Container = styled.div`
    background-image: url(${bg});
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;

    width: 100%;
    height: 500px;

    display: flex;
`;
export const Content = styled.div`
    display: flex;
    color: white;
    width: 100%;
    flex-direction: column;

    align-items: center;
    justify-content: center;
`;
