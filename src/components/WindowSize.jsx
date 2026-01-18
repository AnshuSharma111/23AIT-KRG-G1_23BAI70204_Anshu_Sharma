import { useEffect, useState } from "react";

const WindowSize = () => {
    let [ length, setLength ] = useState(window.innerHeight);
    let [ breadth, setBreadth ] = useState(window.innerWidth);

    useEffect(() => {
        const resizeHandler = () => {
            setLength(window.innerHeight);
            setBreadth(window.innerWidth);
        }

        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
        }
    }, []);

    return (
        <div>
            <h2>Current Window Size: </h2>
            <b>Length : {length} Breadth : {breadth}</b>
        </div>
    )
}

export default WindowSize;