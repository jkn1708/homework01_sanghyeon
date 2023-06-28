import React from "react";

interface IInputTextBox {
  placeHolder?: string;
  keyDownFn?: any;
}

function InputTextBox(props: IInputTextBox) {
  const { placeHolder, keyDownFn } = props;
  return (
    <div>
      <input
        placeholder={placeHolder ?? "search"}
        onKeyDown={keyDownFn}
      ></input>
    </div>
  );
}

export default InputTextBox;
