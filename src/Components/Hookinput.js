import React, {useState} from 'react';



function Hookinput() {
    const [inputvalue,setInputvalue] = useState("")

    function onChange(e){
        let Newvalue = e.target.value
        setInputvalue(Newvalue)
    }

    return (
        <div>
        <ul>
          <input placeholder="...." onChange={onChange}/>{inputvalue}
          </ul>
        </div>
    )
}

export default Hookinput
