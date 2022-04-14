import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/button';
import TextBox from '../../components/TextField/textField';
import logo from '../../Assets/Icons/logo-footer.png';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function SignUp() {
    const initialValues = {
        name: 'jer',
        email: '',
        password1: '',
        password2: ''
    };

    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email().required(),
        password1: yup.string().min(4).max(15).required(),
        password2: yup.string().oneOf([yup.ref('password1')], null)
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const handleChange = (e) => {
        e.preventDefault();
    };

    const onSubmit = (data) => console.log(data);

    // const validate = (val) => {
    //     const errors = {};
    //     const regex = /^[^\$@]+@[^\$@]+\.[^\$@]{2,}$/i;
    //     if (!val.name) {
    //         errors.name = 'Username is required!';
    //     }
    //     if (!val.email) {
    //         errors.email = 'Email is required!';
    //     }
    //     if (!val.password) {
    //         errors.password = 'password is required!';
    //     }

    //     return errors;
    // };

    // useEffect(() => {
    //     console.log(formError);
    //     if (Object.keys(formError).length === 0 && isSubmit) {
    //         console.log(values);
    //     }
    // }, [formError]);

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="w-[400px]  ">
                <img className="text-black my-8" src={logo} alt="" />
                {/* <p className="text-center text-3xl my-5">Hello Again</p> */}
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
                        <p className="text-red-500">
                            {errors.firstName?.message}
                        </p>

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
                        <p className="text-red-500">
                            {errors.lastName?.message}
                        </p>

                        <TextField
                            label="Email"
                            id="outlined-size-small"
                            size="small"
                            type="text"
                            fullWidth
                            margin="normal"
                            {...register('email')}
                        />
                        <p className="text-red-500">{errors.email?.message}</p>

                        <TextField
                            label="Password"
                            margin="normal"
                            id="outlined-size-small"
                            size="small"
                            type="password"
                            fullWidth
                            {...register('password1')}
                        />
                        <p className="text-red-500">
                            {errors.password1?.message}
                        </p>

                        <TextField
                            label="Confirm password"
                            margin="normal"
                            id="outlined-size-small"
                            size="small"
                            type="password"
                            fullWidth
                            {...register('password2')}
                        />
                        <p className="text-red-500">
                            {errors.password2 &&
                                'The password and confirmation password do not match'}
                        </p>

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
