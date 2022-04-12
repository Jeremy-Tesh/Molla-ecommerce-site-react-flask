import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Icons/logo-footer.png';
import Button from '../../components/Button/button';
import TextBox from '../../components/TextField/textField';

function Login() {
    const initialValues = {
        email: '',
        password: ''
    };

    const [data, setData] = useState({});

    useEffect(() => {
        fetch('/api')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((data) => setData(data));
    }, []);
    console.log(data);

    const [values, setValues] = useState(initialValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };
    const handleChange = (e) => {
        var { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="w-[400px]  ">
                <img className="text-black my-8" src={Logo} alt="" />
                {/* <p className="text-center text-3xl my-5">Hello Again</p> */}
                <div>
                    <form className="flex flex-col" onSubmit={handleSubmit}>
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

                        <Button
                            value="Login"
                            type="submit"
                            onClick={handleSubmit}
                        />
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
