/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";

// Functional Component
const Counter = () => {
    // State Declaration
    const [counter, setCounter] = useState(0);

    // Arrow Function
    const handleButtonClick = (e) => {
        let val = parseInt(e.target.getAttribute("val"));

        // Change State Value
        setCounter(counter + val);
    }

    // Hook
    useEffect(() => {
        console.log("Ini seperti componentDidMount()");
        return () => {
            console.log("Ini seperti componentWillUnmount()");
        }
    }, []);

    // Hook
    useEffect(() => {
        console.log("Ini seperti componentDidMount() & componentDidUpdate()");
    });

    return (
        <div>
            <h1>{counter}</h1>
            <button val="+1" onClick={handleButtonClick}>Counter + 1</button>
            <button val="-1" onClick={handleButtonClick}>Counter - 1</button>
        </div>
    )
}

// Functional Component
const Lifecyclefunc = () => {
    // State Declaration
    const [showCounter, setShowCounter] = useState(false);

    // Arrow Function
    const handleButtonClick = () => {
        // Change state value
        setShowCounter(!showCounter);
    }

    return (
        <div>
            <button onClick={handleButtonClick}>
                {showCounter ? "Hide counter" : "Show counter"}
            </button>
            {showCounter && <Counter />}
        </div>
    )
}

export default Lifecyclefunc;