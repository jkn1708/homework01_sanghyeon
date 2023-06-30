import { useState } from "react";

function ShowHideToggleFn(toggle:boolean) {
    const [toggleState,setToggleState] = useState<boolean>(toggle ?? false)
    const setToggleOnOff = () =>{
        setToggleState(toggleState ? false : true)
    }
    return {toggleState,setToggleOnOff}
  }
  
  export default ShowHideToggleFn;