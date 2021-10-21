import React,{useState} from 'react'




 function NewHookCounter() {
     let initialCount = 0
     const [counter,setCounter] = useState(0)


     function Increase(){
         setCounter(prevCounter =>prevCounter + 1)
         console.log("up")
     }

     function Decrease(){
         setCounter(prevCounter =>prevCounter - 1)
     }

     function Reset(){
         setCounter(initialCount)
     }

    return (
        <div>
          <h2>{counter}</h2>
          <button onClick={Increase}>Increase</button>
          <button onClick={Reset}>Reset</button>
          <button onClick ={Decrease}>Decrease</button>   
        </div>
    )
}

export default NewHookCounter