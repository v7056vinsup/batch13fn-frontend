import React, {useCallback,useState} from "react";

function Child ({handleClick}){
    console.log("Child Render");
    return (
        <div>
            <button onClick={handleClick}>Child Button</button>
        </div>
    );
}
function Callback(){
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        console.log("Button clicked");
        setCount(count + 1);
    }, []);
    return (
        <div>
            <div>Callback</div>
            <div>Count: {count}</div>
            <Child handleClick={handleClick} />
        </div>
    );
}

export default Callback;