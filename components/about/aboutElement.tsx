import Image from "next/image";

export default function AboutElement() {
    return (
        <article>
            <div className="image">
                <Image
                    src="/bg2.jpg"
                    alt="article image"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="body">
                <h3>article name</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Non vitae eius repellat quam, quas sed exercitationem
                    officia magni, neque quod officiis libero earum, optio
                    accusantium. Aliquid nulla laborum soluta natus!
                </p>
            </div>
            <style jsx>
                {`
                    article {
                        width: 100%;
                        height: 300px;

                        display: flex;
                        justify-content: space-between;
                    }

                    .image {
                        position: relative;
                        width: 300px;
                        height: 100%;
                        border-radius: 16px;
                        overflow: hidden;
                    }

                    .body {
                        width: calc(100% - 300px);
                        height: 100%;
                        padding: 0 0 0 1rem;
                    }
                `}
            </style>
        </article>
    );
}
