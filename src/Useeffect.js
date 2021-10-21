import React,{useState,useEffect} from  "react"
import randomcolor from 'randomcolor'

 function Useeffect() {
   const initialCount = 0
    const[count,setCount] = useState(initialCount)
    const [color,setColor] = useState('')
   

    function increment(){
        setCount(prevCount => prevCount + 1)  
    }
    

    function Decrement() {
      setCount(prevCount => prevCount - 1)
    }


  useEffect(()=>{
    setColor(randomcolor())
  },[count])
    

    return (
      <div style={{textAlign: "center" }}>
      <h1>Counter</h1>
        <h1 style={{ color: color, fontSize: "50px" }}>{count}</h1>
        <button
          style={{ background: "green", color: "white" }}
          onClick={increment}
        >
          Increment
        </button>
        <button
          style={{ background: "purple", color: "white" }}
          onClick={() => setCount(initialCount)}
        >
          Reset
        </button>
        <button
          style={{ background: "red", color: "white" }}
          onClick={Decrement}
        >
          Decrement
        </button>
      </div>
    );
}

export default Useeffect