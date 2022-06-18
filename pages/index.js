import Head from 'next/head';
import Landingpage from '../components/home/Landingpage';
import Image from 'next/image';
export default function Home() {
    return (
        <div className="w-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center flex-col gap-10">
            <Head>
                <title>LinkIt</title>
                <meta name="description" content="Manage your links with linkit" />
                <link rel="icon" href="/linkit.svg" />
            </Head>
            <Image src={`/linkit.svg`} alt="linkitlogo" width={200} height={200}></Image>
            <Landingpage />
        </div>
    );
}
