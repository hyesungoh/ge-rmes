import AboutElement from "./about/aboutElement";

export default function About() {
    return (
        <section>
            <h1>Gérmes ?</h1>
            <AboutElement />
            <AboutElement />
            <AboutElement />

            <style jsx>{`
                section {
                    width: 100%;
                    height: auto;
                }

                h1 {
                    padding-bottom: 1rem;
                }
            `}</style>
        </section>
    );
}
