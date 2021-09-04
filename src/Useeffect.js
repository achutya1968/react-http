import React,{useState,useEffect} from  "react"
import randomcolor from 'randomcolor'

 function Useeffect() {
    const[count,setCount] = useState(0)
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
        <div>
        <h1 style={{color:color}}>{count}</h1>
        <button onClick = {increment}>Increment</button>
        <button onClick= {Decrement}>Decrement</button>  
        </div>
    )
}

export default Useeffect