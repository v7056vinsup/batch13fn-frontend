import React,{useRef} from "react";

const User = ()=>{
    let count =0;
    const countRef = useRef(0);

    const increment = () => {
        count++;
        countRef.current++;
        console.log(count);
        console.log(countRef.current);
    };
    return(
        <div>
            <button onClick={increment}>Increment</button>
            <div>User: {count}</div>
            <div>Ref: {countRef.current}</div>
        </div>
    )
}
export default User;