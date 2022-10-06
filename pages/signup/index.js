import Link from 'next/link';
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { signupValidator } from '../../validation/auth/signup';
import Navbar from '../../components/navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import keys from '../../config/env';
import Router from 'next/router';
function Signup() {
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) Router.push('/dashboard');
    }, []);
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            conpassword: '',
        },
        validationSchema: signupValidator,
        validateOnChange: false,
        onSubmit: (values) => {
            axios
                .post(`${keys.host}api/signup`, values)
                .then((res) => {
                    if (res.statusText === 'error') toast('unable to create account');
                    else if (res.status === 200) {
                        toast('account created');
                        localStorage.setItem('token', res.data.access_token);
                        formik.setSubmitting(false);
                        Router.push('/dashboard');
                    }
                })
                .catch((err) => {
                    toast('error occured please try later');
                    formik.setSubmitting(false);
                });
        },
    });
    return (
        <>
            <ToastContainer />

            <Navbar />
            <section className="bg-darkbgvoilet py-3 min-h-screen">
                <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Create your account
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
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                                        Your Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-voilet focus:border-voilet block w-full p-2.5 outline-none"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.username}
                                        placeholder="maggie23"
                                        required=""
                                    />
                                    {formik.touched.username && formik.errors.username ? (
                                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                            <span className="font-medium">Oh, snapp!</span> {formik.errors.username}
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
                                        className="bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-voilet focus:border-voilet block w-full p-2.5 outline-none"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                        required=""
                                    />
                                    {formik.touched.password && formik.errors.password ? (
                                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                            {formik.errors.password}
                                        </p>
                                    ) : null}
                                </div>
                                <div>
                                    <label
                                        htmlFor="conpassword"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        name="conpassword"
                                        id="conpassword"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-voilet focus:border-voilet block w-full p-2.5 outline-none"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.conpassword}
                                        required=""
                                    />
                                    {formik.touched.conpassword && formik.errors.conpassword ? (
                                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                            {formik.errors.conpassword}
                                        </p>
                                    ) : null}
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
                                    Sign Up
                                </button>
                                <p className="text-sm font-light text-gray-500">
                                    Already have an account?{' '}
                                    <Link href="/signin">
                                        <span className="font-medium text-primary-600 hover:underline cursor-pointer">
                                            Sign in
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

export default Signup;
