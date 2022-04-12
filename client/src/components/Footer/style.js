import styled from 'styled-components';

export const Container = styled.div`
    height: 50vh;
    background-color: whitesmoke;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    grid-gap: 1em;
    /* overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    } */
`;
export const Wrapper = styled.div`
    height: 100%;
    margin: 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
