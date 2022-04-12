import { Button, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
export const TopContainer = styled.div`
    display: flex;
    height: 170px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('https://d-themes.com/angular/molla/demo5/assets/images/page-header-bg.jpg');
`;
export const Container = styled.div``;
export const TitleContainer = styled.div`
    display: grid;
    grid-template-columns: 45% 55%;
    height: 100vh;
    padding: 40px 10px;
`;
export const LeftContainer = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    height: 100%;
`;
export const RightContainer = styled.div`
    display: grid;
    /* border: 1px solid black; */
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
`;
export const Price = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
`;
export const Quantity = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
`;
export const Total = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
`;
export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
`;
export const CheckOut = styled.div`
    height: 100%;
    width: 70%;
    border: 1px solid coral;
    padding: 10px 10px;
    border-radius: 10px;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;
export const Title = styled(Typography)`
    border-bottom: 1px solid black;
    padding: 15px 15px;
`;
export const Content = styled.div`
    margin-top: 20px;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 20px;
`;
export const ProductImg = styled.div`
    height: 60px;
    width: 60px;
    /* border: 1px solid black; */
    background-image: url('https://d-themes.com/angular/molla/server/uploads/1_3df6114aa3.jpg');
    background-size: cover;
`;
export const SubTitle = styled(Typography)`
    padding-top: 35px;
`;
export const InputField = styled(TextField)`
    width: 70%;
    outline: none;
`;
export const ArrowButton = styled(Button)``;
export const FirstRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
`;
export const SecondRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-item: center;
`;
export const ThirdRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
`;
export const CartTitle = styled(Typography)`
    border-bottom: 1px solid black;
    padding: 20px 20px;
    font-size: 50px;
`;
export const CartButton = styled(Button)`
    background-color: ${(props) => props.color};
`;
