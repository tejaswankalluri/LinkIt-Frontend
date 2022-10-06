import React from 'react';

function Header() {
    return (
        <section className="text-center mx-auto mt-10 flex flex-col items-center">
            <p className="font-bold bg-gradient-to-r from-[#8BC6EC] to-[#9599E2] rounded-md w-fit px-2 py-1">
                free forever We are Opensource
            </p>
            <div className="text-6xl mt-5 text-center font-extrabold text-white text-space tracking-tighter leading-tight md:text-8xl">
                How About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43C5FF] to-[#E520FF]">
                    Managing{' '}
                </span>
                <br /> Your Links
            </div>
            <p className="text-lightpurple font-semibold text-md mt-5 md:text-2xl">
                Managing Social media Links is hard. but not with Linkit, <br /> You will get a one link to share your
                whole social media
            </p>
            <button className="bg-voilet text-white font-bold px-5 py-3 rounded-3xl mt-5 w-fit">Get started</button>
        </section>
    );
}

export default Header;
