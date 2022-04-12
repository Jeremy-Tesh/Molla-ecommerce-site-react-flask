import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/button';
import TextBox from '../../components/TextField/textField';
import logo from '../../Assets/Icons/logo-footer.png';

function SignUp() {
    const initialValues = {
        name: '',
        email: '',
        password: ''
    };

    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="w-[400px]  ">
                <img className="text-black my-8" src={logo} alt="" />
                {/* <p className="text-center text-3xl my-5">Hello Again</p> */}
                <div>
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <TextBox
                            label="Full Name"
                            type=""
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                        />

                        <TextBox
                            label="Email"
                            type=""
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        <TextBox
                            label="password"
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <TextBox
                            label="Re- enter password"
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />

                        <Button
                            value="Signup"
                            type="submit"
                            handleSubmit={handleSubmit}
                        />
                        <div>
                            <span>
                                Do you have an account?{' '}
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
