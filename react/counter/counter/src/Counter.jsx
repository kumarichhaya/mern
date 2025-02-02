import { useState } from "react";

function Counter(){
    let [count,setCount]=useState(0)

    
    return(
        <>
        <button  className="btn btn-danger  w-25" onClick={()=>{ setCount(count-1)   }}>- </button>
        <h1 className="display-2">{count}</h1>
        <button className="btn btn-success w-25" onClick={()=>{ setCount(count+1)   }}>+ </button>
        </> 
    )
}
export default Counter;