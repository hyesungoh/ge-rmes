import Image from "next/image";

export default function BgImage() {
    return (
        <div>
            <Image
                className="image"
                src="/bg2.jpg"
                alt="backgroundimage"
                layout="fill"
                objectFit="cover"
            />
            <style jsx>{`
                div {
                    position: fixed;
                    top: 0;
                    left: 0;

                    z-index: 1;

                    width: 100vw;
                    height: 80vh;
                    object-fit: cover;
                }
            `}</style>
        </div>
    );
}
