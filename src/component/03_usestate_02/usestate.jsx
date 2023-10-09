import { useState } from "react";

// Functional Component
const Usestate = () => {
    // State Declaration with Hook
    const [title_1, setTitle_1] = useState("What are you studying?");
    const [title_2, setTitle_2] = useState("Learn What Else?");

    // Arrow Function
    const handleButtonClick = () => {
        // Change the state value
        setTitle_1("Learn Javascript");
        setTitle_2("Learn React");
    }

    return (
        <div>
            <h3>{title_1}</h3>
            <h3>{title_2}</h3>
            <button onClick={handleButtonClick}>Ayo Belajar Pemrograman</button>
        </div>
    )
}

export default Usestate;