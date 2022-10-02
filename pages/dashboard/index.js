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
            <DashNavbar username={data.username} />
            {data ? (
                <section className="my-10 container mx-auto">
                    <div className="text-darkbgvoilet text-5xl font-bold capitalize">Howdy {data.username},</div>
                    <Link href={`/u/${data.username}`}>
                        <button
                            type="button"
                            className="float-right focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                        >
                            Your Public Link
                        </button>
                    </Link>
                    <Links links={data.links} />
                </section>
            ) : (
                // loadin skeleton
                <section className="my-10 container mx-auto">
                    <div role="status" className="max-w-sm animate-pulse">
                        <div className="h-16 bg-gray-300 rounded-md w-full mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
                    </div>
                </section>
            )}
        </>
    );
}

export default Dashboard;
