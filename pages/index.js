import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Discophile | johanhanses.net</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <Navbar />
            <main>
                <h1 className="title">Uuja at NextJS</h1>

                <p className="description"></p>
            </main>

            <footer>Johan Hanses {new Date().getFullYear()}</footer>

            <style jsx>{`
                .title a {
                    color: #0070f3;
                    text-decoration: none;
                }

                .title a:hover,
                .title a:focus,
                .title a:active {
                    text-decoration: underline;
                }

                .title {
                    margin: 0;
                    line-height: 1.15;
                    font-size: 4rem;
                }

                .title,
                .description {
                    text-align: center;
                }

                .description {
                    line-height: 1.5;
                    font-size: 1.5rem;
                }

                @media (max-width: 600px) {
                    .grid {
                        width: 100%;
                        flex-direction: column;
                    }
                }
            `}</style>
        </div>
    );
}
