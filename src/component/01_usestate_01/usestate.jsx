/* eslint-disable react/prop-types */
import { useState } from "react";

// Functional Component
const Cat = (props) => {
    // State declaration with Hook
    const [isHungry, setIsHungry] = useState(true);

    // Return Value with JSX
    return (
        <div>
            <p>I am {props.name}, and I am {isHungry ? " hungry" : " full"}!</p>
            <button
                onClick={() => {
                    // Change the state value
                    setIsHungry(false);
                }}
                disabled={!isHungry}
            >
                {isHungry ? "Pour me some milk, please!" : "Thank you!"}
            </button>
        </div>
    );
}

// Functional Component
const Cafe = () => {
    return (
        <div>
            <Cat name="Munkustrap" />
            <Cat name="Spot" />
        </div>
    );
}

export default Cafe;