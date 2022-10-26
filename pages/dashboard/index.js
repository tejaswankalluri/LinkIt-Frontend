import React, { useEffect, useState, useRef } from 'react';
import axiosInstance from '../../util/axiosInstance';
import axios from 'axios';
import Router from 'next/router';
import Link from 'next/link';
import DashNavbar from '../../components/dashboard/navbar';
import Links from '../../components/dashboard/links';
function Dashboard() {
    const [data, setData] = useState('');
    const effectRan = useRef(false);
    useEffect(() => {
        if (effectRan.current == false) {
            const fetchdata = async () => {
                try {
                    const responce = await axiosInstance.get('api/admin');
                    // setTimeout(() => {
                    //     setData(responce.data);
                    // }, 90000);
                    setData(responce.data);
                } catch (err) {
                    if (axios.isCancel(err)) {
                        Router.push('/signin');
                    }
                    Router.push('/signin');
                }
            };
            fetchdata();
        }
        return () => (effectRan.current = true);
    }, []);
    return (
        <>
            <DashNavbar username={data.username} avatar={data.avatar} />
            <main className="bg-darkbgvoilet min-h-screen">
                <section className="py-10 container mx-auto text-white">
                    {data ? (
                        <>
                            <div className="flex flex-col md:flex-row w-full mt-10 gap-10 items-center md:justify-between">
                                <div className="text-4xl text-center md:text-5xl font-extrabold capitalize md:text-left">
                                    Howdy {data.username},
                                </div>
                                <Link href={`/u/${data.username}`} className="inline">
                                    <button
                                        type="button"
                                        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                                    >
                                        Your Public Link
                                    </button>
                                </Link>
                            </div>

                            <Links links={data.links} />
                        </>
                    ) : (
                        // loadin skeleton
                        <div className="flex w-full justify-center md:justify-start">
                            <div className="w-96 animate-pulse">
                                <div className="h-16 bg-lightbggrape rounded-md w-full mb-4"></div>
                                <div className="h-2 bg-lightbggrape rounded-full max-w-[360px] mb-2.5"></div>
                                <div className="h-2 bg-lightbggrape rounded-full mb-2.5"></div>
                                <div className="h-2 bg-lightbggrape rounded-full max-w-[330px] mb-2.5"></div>
                            </div>
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}

export default Dashboard;
