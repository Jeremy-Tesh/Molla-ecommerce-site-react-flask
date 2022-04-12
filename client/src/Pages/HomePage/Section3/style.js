import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
`;
export const CardContainer = styled.div`
    display: flex;
    height: 80vh;
    border: 2px, red;
    justify-content: center;
`;
export const Card = styled.div`
    background: url(${(props) => props.bg});
    background-size: fill;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-between;
    width: 280px;
    flex-wrap: 'wrap';
    height: 80%;
    margin: 10px;
`;
export const Stock = styled.div`
    margin: 20px;
`;
export const Icons = styled.div``;
