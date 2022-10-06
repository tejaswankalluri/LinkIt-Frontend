import React from 'react';
import Image from 'next/image';
function Swapcards() {
    return (
        <section className="py-32" id="about">
            <div className="flex container mx-auto items-center justify-center text-center flex-col-reverse md:justify-between md:text-left md:flex-row">
                <div className="md:w-1/2">
                    <p className="font-bold text-white text-4xl leading-tight md:text-5xl">
                        Create and customize <br /> your bio link <br />
                        in{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F55555] to-[#FCCF31]">
                            Minutes
                        </span>
                    </p>
                    <p className="text-lightpurple mt-5 font-medium">
                        Connect your socials, website, store, videos, music, podcast, events and more. It all comes
                        together in a link in bio landing page designed to convert.
                    </p>
                    <button className="bg-voilet text-white font-bold px-5 py-3 rounded-3xl mt-5 w-fit">
                        Get started
                    </button>
                </div>
                <Image
                    src={
                        'https://res.cloudinary.com/dvvheza58/image/upload/v1665025107/Linkit_frontend/swapcard1_xxpvi8.svg'
                    }
                    alt="customize your bio link"
                    width={500}
                    height={500}
                />
            </div>

            <div className="flex container mx-auto mt-20 items-center justify-center text-center flex-col md:justify-between md:text-left md:flex-row">
                <Image
                    src={
                        'https://res.cloudinary.com/dvvheza58/image/upload/v1665025107/Linkit_frontend/swapcard2_xancub.svg'
                    }
                    alt="customize your bio link"
                    width={500}
                    height={500}
                />
                <div className="md:w-1/2">
                    <p className="font-bold text-white text-4xl leading-tight md:text-5xl">
                        Share your LinkIt
                        <br /> anywhere you like!
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8BC6EC] to-[#9599E2]">
                            hassle free
                        </span>
                    </p>
                    <p className="text-lightpurple mt-5 font-medium">
                        Add your unique LinkIt URL to all the platforms and places you find your audience. Then use your
                        QR code to drive your offline traffic online.
                    </p>
                    <button className="bg-voilet text-white font-bold px-5 py-3 rounded-3xl mt-5 w-fit">
                        Get started
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Swapcards;
