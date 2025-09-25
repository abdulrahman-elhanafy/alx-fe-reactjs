import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div
            style={{
                padding: "20px",
                border: "1px solid gray",
                margin: "20px",
            }}>
            <h2>Counter App</h2>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;
