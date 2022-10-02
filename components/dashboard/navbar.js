import Link from 'next/link';
import Router from 'next/router';
import React, { useState } from 'react';
import Avatar from 'react-avatar';
function DashNavbar({ username }) {
    const signout = () => {
        localStorage.removeItem('token');
        Router.push('/');
    };
    const [dropdown, setDropdown] = useState(false);
    return (
        <nav className="bg-lightbggrape text-white px-4 py-2.5 shadow-md">
            <div className="flex justify-between items-center container mx-auto z-10">
                <Link href="/">
                    <a className="text-2xl font-bold">Linkit</a>
                </Link>
                <div>
                    <button className="" type="button" onClick={() => setDropdown(dropdown ? false : true)}>
                        {username ? (
                            <Avatar name={username} size={40} round={true} />
                        ) : (
                            <div className="animate-pulse">
                                <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                            </div>
                        )}
                    </button>

                    <div
                        className={
                            'z-50 w-40 bg-white rounded divide-y divide-gray-100 shadow  absolute -translate-x-20 translate-y-1 ' +
                            (dropdown ? '' : 'hidden')
                        }
                    >
                        <ul className="py-1 text-sm text-gray-700 " aria-labelledby="dropdownDefault">
                            <li>
                                <Link href={'/dashboard'}>
                                    <a className="block py-2 px-4 hover:bg-gray-100 ">Dashboard</a>
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 ">
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a className="block py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={signout}>
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default DashNavbar;
