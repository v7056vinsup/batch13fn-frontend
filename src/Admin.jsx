import React,{useMemo, useState} from "react";

const Admin = ()=>{
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const calculation = useMemo(()=>{
        console.log("Calculation");
        return count*10;
    }, [count]);
    return( 
        <div>
            <div>Admin</div>
            <div>Calculation: {calculation}</div>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    )
}
export default Admin;