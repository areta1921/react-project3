import { useState } from "react";

function Nani(){

    const [inputVal, setInputVal ] = useState('ABRAHAM')
    const changes = (event) => {
    const absho = event.target.value
    setInputVal(absho)
    }
      return (
        <div>
              <input type="text" placeholder="This is change" onChange={changes}/>
              {inputVal}
        </div>
      )
    }
    export default Nani