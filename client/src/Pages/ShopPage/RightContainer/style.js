import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-column-gap: 1em;
    grid-row-gap: 5em;
`;
export const Content = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: center;
`;
export const ParentContainer = styled.div`
    flex: 2;
    display: grid;
    grid-gap: 1em;
    padding-right: 50px;
    height: 150vh;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;
export const FirstDiv = styled.div`
    height: 200px;
    background-image: url(${(props) => props.img});
    background-size: cover;
`;
export const SecondDiv = styled.div`
    height: 200px;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    justify-content: center;
`;
export const ThirdDiv = styled.div`
    height: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
export const Title = styled.p`
    text-align: start;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0;
    margin: 0;
    &:hover {
        color: red;
    }
`;
export const SubTitle = styled.p`
    font-size: 15px;
`;
