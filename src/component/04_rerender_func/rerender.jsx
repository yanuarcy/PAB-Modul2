import { useState } from "react";

// Functional Component
const Rerender = () => {
    // State declaration with Hook
    const [title, setTitle] = useState("Learn React");

    // Variable declaration
    let foo = "Hei";
    console.log('A:', foo);

    // Arrow Function inside Functional Component
    const handleButtonClick = () => {
        console.log('B:', foo);
        foo = "Hello";
        console.log('C:', foo);

        if (title === "Learn React") {
            // Change the state value
            setTitle("Learn JavaScript");
        }
        else {
            // Change the state value
            setTitle("Learn React");
        }
    }

    // Arrow Function inside Functional Component
    const handleFooClick = () => {
        console.log(foo);
        alert(foo);
    }

    return (
        <div>
            <h3>Title: {title}</h3>
            <div>
                <p><button onClick={handleButtonClick}>Change Title</button></p>
                <p><button onClick={handleFooClick}>Get Foo Value</button></p>
            </div>
        </div>
    )
}

export default Rerender;