import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
function Navbar() {
    return (
        <div className="bg-[#403359]">
            <nav className="container mx-auto max-h-36 flex items-center justify-between text-lightpurple py-4">
                <div className="text-2xl cursor-pointer">
                    <Link href="/">
                        <Image src="/nav_logo.svg" alt="logo" width={95} height={48} />
                    </Link>

                    {/* <img src="/nav_logo.svg" alt="" /> */}
                </div>
                <div className="flex w-80 justify-between items-center cursor-pointer font-semibold">
                    <ul>
                        <a href="">Home</a>
                    </ul>
                    <ul>
                        <a href="#about">About</a>
                    </ul>
                    <ul>
                        <a href="">Pricing</a>
                    </ul>
                    <Link href="/signin">
                        <button className="border-none bg-voilet py-2 px-5 rounded-md text-white">Login</button>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
