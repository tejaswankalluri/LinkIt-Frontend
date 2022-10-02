import React, { useEffect } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import keys from '../../config/env';
import Router from 'next/router';
import { signinValidator } from '../../validation/auth/signin';
import Navbar from '../../components/navbar';

function Signin() {
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) Router.push('/dashboard');
    }, []);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: signinValidator,
        onSubmit: (values) => {
            axios
                .post(`${keys.host}api/login`, values)
                .then((res) => {
                    if (res.statusText === 'error') toast('some error occured');
                    else if (res.status === 200) {
                        localStorage.setItem('token', res.data.access_token);
                        formik.setSubmitting(false);
                        Router.push('/dashboard');
                    }
                })
                .catch((err) => {
                    if (err.response.status === 403) toast('incorrect email or password');
                    else toast('Internal server error plz try later');
                    formik.setSubmitting(false);
                });
        },
    });
    return (
        <>
            <ToastContainer />
            <Navbar />
            <section className="bg-darkbgvoilet">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                        <img className="w-20 h-10 mr-2" src="/nav_logo.svg" alt="logo" />
                    </a>
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-voilet focus:border-voilet block w-full p-2.5 outline-none"
                                        placeholder="name@company.com"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        required=""
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                            <span className="font-medium">Oh, snapp!</span> {formik.errors.email}
                                        </p>
                                    ) : null}
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        className="bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-voilet focus:border-voilet block w-full p-2.5 outline-none"
                                        required=""
                                    />
                                    {formik.touched.password && formik.errors.password ? (
                                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                            {formik.errors.password}
                                        </p>
                                    ) : null}
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                                required=""
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline">
                                        Forgot password?
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-voilet hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-slate-400 disabled:cursor-not-allowed"
                                    disabled={!formik.isValid || formik.isSubmitting}
                                >
                                    {formik.isSubmitting ? (
                                        <svg
                                            aria-hidden="true"
                                            role="status"
                                            className="inline mr-2 w-4 h-4 text-white animate-spin"
                                            viewBox="0 0 100 101"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="#E5E7EB"
                                            />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    ) : null}
                                    Sign in
                                </button>
                                <p className="text-sm font-light text-gray-500">
                                    Don’t have an account yet?{' '}
                                    <Link href="/signup">
                                        <span className="font-medium text-primary-600 hover:underline cursor-pointer">
                                            Sign up
                                        </span>
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Signin;
