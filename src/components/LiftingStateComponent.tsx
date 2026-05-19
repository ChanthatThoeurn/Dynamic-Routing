import { useState } from "react";

export default function LiftingStateComponent() {
    const [amount, setAmount] = useState(0);
    return(
        <div>
            <h2>Lifting State Component</h2>
            <p>Amount: {amount}</p>
        </div>  
    )

    function ChildComponent() {
    return(
        <div>
            <button onClick={() => setAmount(amount + 1)}> update amount</button>
        </div>  
    )
    }
    
    function ParentComponent() {
    return(
        <div>
            <h2>Parent Component</h2>
            <ChildComponent/>
        </div>  
    )
    }
}

