import { useState } from "react";

function ShowHideToggleFn(toggle: boolean) {
  const [toggleState, setToggleState] = useState<boolean>(toggle ?? false);
  const setToggleOnOff = (boolean: boolean) => {
    setToggleState(boolean);
  };
  const setToggleReverse = () => {
    setToggleState(toggleState ? false : true);
  };
  return { toggleState, setToggleOnOff, setToggleReverse };
}

export default ShowHideToggleFn;
