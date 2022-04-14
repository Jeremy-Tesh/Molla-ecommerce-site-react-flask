import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/button';
import { Alert } from 'react-bootstrap';

import logo from '../../Assets/Icons/logo-footer.png';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function SignUp() {
    const [show, setShow] = useState(false);
    const [serverResponse, setServerResponse] = useState('');

    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email().required(),
        password1: yup.string().min(6).max(15).required(),
        password2: yup.string().oneOf([yup.ref('password1')], null)
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
        const body = {
            username: data.firstName,
            email: data.email,
            password: data.password1
        };
        const requestOptions = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        };
        reset();

        fetch('/auth/signup', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setServerResponse(data.message);
                console.log(serverResponse);
                setShow(true);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="w-[400px]  ">
                <img className="text-black my-8" src={logo} alt="" />
                {/* <p className="text-center text-3xl my-5">Hello Again</p> */}
                {show ? (
                    <Alert
                        variant="success"
                        onClose={() => setShow(false)}
                        dismissible
                    >
                        <p>{serverResponse}</p>
                    </Alert>
                ) : (
                    <p></p>
                )}
                <div>
                    <form
                        className="flex flex-col"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <TextField
                            className="mb-2"
                            label="Full name"
                            id="outlined-size-small"
                            margin="normal"
                            size="small"
                            type="text"
                            fullWidth
                            {...register('firstName')}
                        />
                        <small className="text-red-500">
                            {errors.firstName?.message}
                        </small>

                        <TextField
                            className="mb-2"
                            label="Last name"
                            id="outlined-size-small"
                            margin="normal"
                            size="small"
                            type="text"
                            fullWidth
                            {...register('lastName')}
                        />
                        <small className="text-red-500">
                            {errors.lastName?.message}
                        </small>

                        <TextField
                            label="Email"
                            id="outlined-size-small"
                            size="small"
                            type="text"
                            fullWidth
                            margin="normal"
                            {...register('email')}
                        />
                        <small className="text-red-500">
                            {errors.email?.message}
                        </small>

                        <TextField
                            label="Password"
                            margin="normal"
                            id="outlined-size-small"
                            size="small"
                            type="password"
                            fullWidth
                            {...register('password1')}
                        />
                        <small className="text-red-500">
                            {errors.password1?.message}
                        </small>

                        <TextField
                            label="Confirm password"
                            margin="normal"
                            id="outlined-size-small"
                            size="small"
                            type="password"
                            fullWidth
                            {...register('password2')}
                        />
                        <small className="text-red-500">
                            {errors.password2 &&
                                'The password and confirmation password do not match'}
                        </small>

                        <Button
                            value="Signup"
                            type="submit"
                            // handleSubmit={handleSubmit(onSubmit)}
                        />
                        <div>
                            <span>
                                Already have an account?{' '}
                                <Link to="/login">Login</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
