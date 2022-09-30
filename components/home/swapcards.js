import React from 'react';
import Image from 'next/image';
function Swapcards() {
    return (
        <section className="py-32" id="about">
            <div className="flex container mx-auto items-center justify-between">
                <div className="w-1/2">
                    <p className="font-bold text-white text-5xl leading-tight">
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
                <Image src={'/homepage/swapcard1.svg'} alt="customize your bio link" width={500} height={500} />
            </div>

            <div className="flex container mx-auto items-center justify-between mt-20">
                <Image src={'/homepage/swapcard2.svg'} alt="customize your bio link" width={500} height={500} />
                <div className="w-1/2">
                    <p className="font-bold text-white text-5xl leading-tight">
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
