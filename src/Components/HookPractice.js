import React,{useState}from 'react'

 function HookPractice() {
     //let hungry = false;

    const[hungry,setHungry] = useState(false);
    const [num,setNum] = useState(1)

    const changeNum =()=>{
        setNum(num => num + 1)
        console.log(num)
    }

  const  clickHandler =()=>{
      setHungry(hungry =>!hungry
       
      )
       
       console.log(hungry)
   }

    return (
        <div>
        <h1 onClick={clickHandler}>Hungry or not!</h1>
            <p onClick={changeNum}>Learn react when you are {hungry?"really":"not"} hungry</p>
        </div>
    )
}

export default HookPractice