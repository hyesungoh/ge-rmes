export default function Nav() {
    return (
        <nav>
            <h1>Gérmes</h1>
            <div className="element">
                <span>About</span>
                <span>Buy</span>
                <span>Contact</span>
            </div>

            <style jsx>{`
                nav {
                    position: sticky;
                    top: 0;
                    width: 100vw;
                    height: 70px;
                    background-color: white;
                    padding: 0px 2rem;
                    z-index: 3;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .element > span {
                    margin: 0px 0.5rem;
                }
            `}</style>
        </nav>
    );
}
