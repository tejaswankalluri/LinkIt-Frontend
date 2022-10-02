import React from 'react';
import axios from 'axios';
import keys from '../../config/env';
import Avatar from 'react-avatar';
import Link from 'next/link';

function Cards({ link, name }) {
    return (
        <a
            href={link}
            className="mt-5 bg-white text-center w-96 py-4 px-9 rounded-md text-black capitalize font-bold hover:bg-gray-100"
            target="_blank"
            rel="noreferrer"
        >
            {name}
        </a>
    );
}

function LinkitPage({ data }) {
    return (
        <section className="flex items-center justify-center flex-col bg-darkbgvoilet w-full min-h-screen text-white">
            {data ? (
                <>
                    <div className="pt-10 mb-5">
                        <Avatar name={data.username} width={50} round={true} />
                        <p className="font-extrabold text-center capitalize mt-3 text-xl">{data.username}</p>
                    </div>
                    {data.links.map((linkd, id) => (
                        <Cards link={linkd.link} name={linkd.name} key={id} />
                    ))}
                    <div className="mt-20">
                        <p className="text-sm text-center capitalize mt-3">
                            Made with{' '}
                            <Link href="/">
                                <span className="hover:text-cyan-700 cursor-pointer font-bold">linkit</span>
                            </Link>
                        </p>
                    </div>
                </>
            ) : (
                <div className="text-5xl font-bold capitalize">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                            404
                        </h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                            User Not Found
                        </p>
                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                            Sorry, we cannot find that page. You will find lots to explore on the home page.{' '}
                        </p>
                        <Link href={'/'}>
                            <a className="inline-flex text-white bg-voilet hover:bg-violet-600 focus:ring-4 focus:outline-none focus:ring-voilet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">
                                Back to Homepage
                            </a>
                        </Link>
                    </div>
                </div>
            )}
        </section>
    );
}
export async function getServerSideProps(context) {
    const { userid } = context.query;
    let data = null;
    try {
        const res = await axios.get(`${process.env.VERCEL_URL}/api/user/${userid}`);
        data = res.data;
    } catch (err) {
        console.log(err);
    }
    return { props: { data } };
}
export default LinkitPage;
