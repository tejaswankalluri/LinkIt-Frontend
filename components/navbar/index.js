import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
function Navbar() {
    const [login, setLogin] = useState(false);
    const [menuToggle, setMenuToggle] = useState(true);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) setLogin(true);
    }, []);
    return (
        <div className="bg-[#403359]">
            <nav className="p-2 md:p-0 container mx-auto max-h-36 flex items-center justify-between text-lightpurple py-4">
                <div className="text-2xl cursor-pointer">
                    <Link href="/">
                        <Image
                            src="https://res.cloudinary.com/dvvheza58/image/upload/v1665025560/Linkit_frontend/nav_logo_i218sh.svg"
                            alt="logo"
                            width={95}
                            height={48}
                        />
                    </Link>
                </div>
                <div
                    className={
                        'w-full flex flex-col space-y-5 p-4 text-gray-700 drop-shadow-lg absolute top-20 left-0 bg-white cursor-pointer font-semibold md:flex-row md:bg-transparent md:justify-between md:items-center md:flex md:w-96 md:static md:text-lightpurple md:space-y-0 md:drop-shadow-non' +
                        (menuToggle ? ' hidden' : '')
                    }
                >
                    <ul>
                        <Link href={'/'}>
                            <a>Home</a>
                        </Link>
                    </ul>
                    <ul>
                        <Link href={'/#about'}>
                            <a>About</a>
                        </Link>
                    </ul>
                    <ul>
                        <Link href={'/#pricing'}>
                            <a>Pricing</a>
                        </Link>
                    </ul>
                    <Link href={login ? '/dashboard' : '/signin'}>
                        <button className="border-none bg-voilet py-2 px-5 rounded-md text-white">
                            {login ? 'Dashborad' : 'Login'}
                        </button>
                    </Link>
                </div>
                <a className="space-y-2 cursor-pointer md:hidden" onClick={() => setMenuToggle(!menuToggle)}>
                    <div className="w-8 h-0.5 bg-white"></div>
                    <div className="w-8 h-0.5 bg-white"></div>
                    <div className="w-8 h-0.5 bg-white"></div>
                </a>
            </nav>
        </div>
    );
}

export default Navbar;
