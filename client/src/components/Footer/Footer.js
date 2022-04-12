import { Typography } from '@mui/material';
import React from 'react';
import { Container, Wrapper } from './style';
import Logo from '../../Assets/Icons/logo-footer.png';

let Info = ['About Molla', 'How To Shop On Molla', 'Faq', 'ContactUs', 'Login'];
let Service = [
    'Payement Method',
    'Money Back Guarantee!',
    'Returns',
    'Shipping',
    'Terms And Conditions',
    'Privacy Policy'
];
let Account = ['SignIn', 'View Cart', 'My wish List', 'Track My Order', 'Help'];
function Footer() {
    return (
        <Container>
            <Wrapper>
                <img className="w-[104px] h-[26px] my-5" src={Logo} alt="" />
                <Typography>
                    Praesent dapibus, neque id cursus ucibus, tortor neque
                    egestas augue, eu vulputate magna eros eu erat. Aliquam erat
                    volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
                    facilisis luctus, metus.
                </Typography>
            </Wrapper>
            <Wrapper>
                <Typography variant="h5"> Information</Typography>
                {Info.map((info, id) => (
                    <Typography key={id}>{info}</Typography>
                ))}
            </Wrapper>
            <Wrapper>
                <Typography variant="h5">Customer Service</Typography>
                {Service.map((service, id) => (
                    <Typography key={id}>{service}</Typography>
                ))}
            </Wrapper>
            <Wrapper>
                <Typography variant="h5">My Account</Typography>
                {Account.map((acc, id) => (
                    <Typography key={id}>{acc}</Typography>
                ))}
            </Wrapper>
        </Container>
    );
}

export default Footer;
