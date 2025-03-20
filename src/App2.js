import { useState } from "react";

export default function App2(){
    const [count,setCount] = useState(0)
    return (
        <div>
            <button>+</button>
            {count}
            <button>-</button>
        </div>
    )
}