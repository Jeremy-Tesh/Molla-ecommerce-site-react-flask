// import { Button, TextField, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import styled from 'styled-components';

export const TopContainer = styled.div`
    display: flex;
    padding: 90px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('https://d-themes.com/angular/molla/demo5/assets/images/page-header-bg.jpg');
`;
export const Coupon = styled(TextField)`
    height: 10px;
    width: 30%;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin-bottom: 250px;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 2;
    height: 100%;
    padding: 30px 30px;
`;
export const CheckOutCard = styled.div`
    height: 100%;
    width: 70%;
    border: 1px dashed rgba(0, 0, 0.6);
    padding: 10px 10px;
    border-radius: 10px;
    align-self: center;
    display: flex;
    flex-direction: column;
`;
export const Wrapper = styled.div`
    margin-top: 100px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 20px;
    align-items: center;
    justify-content: center;
    height: 100%;
`;
