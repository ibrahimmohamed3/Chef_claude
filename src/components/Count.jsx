import { useState } from "react"


function Count(){
    const [count, setCount] = useState(0)

    function add(){
        setCount(prevCount=>prevCount+1)
    }
    function subtract(){
        setCount(prevCount=>prevCount-1)
    }


    return(
        <>
          <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus"onClick={subtract} aria-label="Decrease count">Subtract</button>
                <h2 className="count">{count}</h2>
                <button className="plus" onClick={add} aria-label="Increase count">Add</button>
            </div>
        </main>
        </>
    )
}
export default Count