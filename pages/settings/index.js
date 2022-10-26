import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import axiosInstance from '../../util/axiosInstance';
import Router from 'next/router';
import DashNavbar from '../../components/dashboard/navbar';
import FormSettings from '../../components/settings/form';

export default function Settings() {
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
            <main className="bg-darkbgvoilet min-h-screen text-white">
                <section className="py-10 container mx-auto">
                    <div className="text-4xl text-center md:text-5xl font-extrabold capitalize md:text-left">
                        Settings
                    </div>
                    <FormSettings username={data.username} />
                </section>
            </main>
        </>
    );
}
