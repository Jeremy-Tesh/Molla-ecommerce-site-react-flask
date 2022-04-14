import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Icons/logo-footer.png';
import Button from '../../components/Button/button';
import { login } from '../../auth';
import { useNavigate } from 'react-router-dom';

import * as yup from 'yup';

function Login() {
    const navigate = useNavigate();

    const schema = yup.object().shape({
        username: yup.string().min(6).max(15).required(),
        password: yup.string().min(6).max(15).required()
    });

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
        const requestOptions = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        fetch('auth/login', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                console.log(data['access token']);
                login(data['access token']);
                navigate('/');
            });

        reset();
    };

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="w-[400px]  ">
                <img className="text-black my-8" src={Logo} alt="" />
                {/* <p className="text-center text-3xl my-5">Hello Again</p> */}
                <div>
                    <form
                        className="flex flex-col"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <TextField
                            label="Username"
                            type="text"
                            margin="normal"
                            {...register('username')}
                        />
                        <small className="text-red-500">
                            {errors.username?.message}
                        </small>
                        <TextField
                            label="password"
                            type="password"
                            margin="normal"
                            {...register('password')}
                        />
                        <small className="text-red-500">
                            {errors.password?.message}
                        </small>

                        <Button value="Login" type="submit" />
                        <div>
                            <p>
                                Dont't have an account yet ?{' '}
                                <Link to="/signup">SIGNUP</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
