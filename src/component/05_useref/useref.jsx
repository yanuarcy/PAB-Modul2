import { useRef, useState } from "react";

    // Functional Component
const Useref = () => {
    // State Declaration
    const [title, setTitle] = useState("Learn React");

    // Variable Declaration with useRef
    const foo = useRef("Hei");
    console.log('A:', foo);

    // Functional Component
    const handleButtonClick = () => {
        console.log('B:', foo.current);
        foo.current = "Hello"; // Change variable value
        console.log('C:', foo.current);

        if (title === "Learn React") {
            setTitle("Learn JavaScript");
        }
        else {
            setTitle("Learn React");
        }
    }

    // Functional Component
    const handleFooClick = () => {
        console.log('Get Foo:', foo.current);
        alert(foo.current);
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

export default Useref;