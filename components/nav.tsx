import { useState, useEffect, useRef } from "react";

export default function Nav() {
    const [scrollY, setScrollY] = useState<number>(0);
    const navRef = useRef<HTMLElement | null>(null);

    const NAV_TRANSFORM_OFFSET: number = 300;

    const handleScroll = () => {
        const currentOffset = window.pageYOffset;
        if (currentOffset > NAV_TRANSFORM_OFFSET) {
            navRef.current.classList.add("scrolled");
        } else {
            navRef.current.classList.remove("scrolled");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav ref={navRef}>
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
                    transition: background-color 0.3s;
                }

                .element > span {
                    margin: 0px 0.5rem;
                }

                .scrolled {
                    background-color: rgba(255, 255, 255, 0.4);
                }
            `}</style>
        </nav>
    );
}
