import { use, useState } from "react"

export default function AddTocardComponent() {
    // create state for card

    //     state, function to update state
    const [count, setCount] = useState(0)
    return(
        <div className="flex flex-col items-center gap-5">
            <h1>Card: {count}</h1>
            <button className=" border p-4 rounded-3xl bg-blue-500 text-white" onClick={() => setCount(count + 1)}>
                Add to Card   
            </button>

            <button className=" border p-4 rounded-3xl bg-red-500 text-white" onClick={() => setCount(count - 1)}>
                Remove Card
            </button>
        
        
        
        
        </div>
)
}