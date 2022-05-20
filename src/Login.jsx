import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

import Auth from "./Auth/Auth.json";




const Login = () => {

    const [theUser, setTheUser] = useState('');
    const [thePassword, setThePassword] = useState('');
    const navigate = useNavigate();
    const forUserName = (e) => {
        setTheUser(e.target.value);
    }

    const forPassword = (p) => {
        setThePassword(p.target.value);
    }

    const Verify = () => {
        // toast("clicked");
        let theExpressions = /^[a-zA-Z\s]*$/;

        if (theUser.length === 0 && thePassword.length === 0) {
            toast("user name and password cant be empty");
        } else if (theUser.length === 0) {
            toast.warn("user name cannot be empty");
        } else if (thePassword.length === 0 || thePassword.length < 2) {
            toast.warn("must be more than 2 charaxters");
        }

        console.log(theExpressions.test(theUser))
        if (!theExpressions.test(theUser)) {
            toast("only letters are allowed");

        }
        console.log(Auth);

        Auth.forEach((obj, index) => {
            if (obj.username === theUser && obj.password === thePassword) {
                toast.success(`${theUser}: Login Successful`);
                navigate('/dashboard');
                setTimeout(Verify(), 1000);
            }
        })


    }

    return (

        <div>
            <ToastContainer position='top-right' draggable='false' transition={Zoom} />
            <div className='mt-5 ml-8'>
                <Link to="/">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </div>
                </Link>

                <div className='flex justify-center items-center mt-20 px-10 md:px-0'>
                    <form class="w-full max-w-sm">

                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    User Name
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input type='text' onChange={forUserName} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" name='email' id="inline-full-name" placeholder="username" />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                    Password
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input onChange={forPassword} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" name='password' id="inline-password" type="password" placeholder="*******" />
                            </div>
                        </div>

                        <div class="md:flex md:items-center">
                            <div class="md:w-1/3"></div>
                            <div class="md:w-2/3">

                                <button onClick={Verify} class="shadow bg-black hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg hover:scale-105 transition-all hover:shadow-2xl" type="button">
                                    Login
                                </button>


                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login;