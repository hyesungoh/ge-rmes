import Head from "next/head";

import Nav from "components/nav";
import BgImage from "components/bgImage";
import About from "components/about";

export default function Home() {
    return (
        <div className="root">
            <Head>
                <title>Gérmes</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />
            <BgImage />
            <main>
                <About />
            </main>

            <style jsx>{`
                .root {
                    width: 100vw;
                    min-height: 100vh;
                    background-color: #dfe6e9;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                main {
                    width: 96vw;
                    height: 100vh;
                    z-index: 2;
                    margin-top: 60vh;
                    background-color: white;

                    padding: 1rem 1.4rem;
                }
            `}</style>

            <style global jsx>{`
                @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;700&display=swap");

                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: "Noto Sans KR", sans-serif;
                }
            `}</style>
        </div>
    );
}
