import Head from 'next/head';
import Landingpage from '../components/home/Landingpage';
import HomePage from '../components/home';
import Image from 'next/image';
export default function Home() {
    return (
        <div className="bg-darkbgvoilet min-h-screen">
            <Head>
                <title>LinkIt</title>
                <meta name="description" content="Manage your links with linkit" />
            </Head>
            {/* <Image src={`/linkit.svg`} alt="linkitlogo" width={200} height={200}></Image> */}
            {/* <Landingpage /> */}
            <HomePage />
        </div>
    );
}
