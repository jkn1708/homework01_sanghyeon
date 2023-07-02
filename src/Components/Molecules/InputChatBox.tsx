import React from "react";

interface IInputChatBox {
  placeHolder?: string;
  handleInputEnter?: any;
}

function InputChatBox(props: IInputChatBox) {
  const { placeHolder, handleInputEnter } = props;
  const handleKeyPress = (e: any) => {
    if (e.target.value !== "") {
      handleInputEnter(e);
      e.target.value = "";
    }
  };
  return (
    <div>
      <input
        placeholder={placeHolder ?? "채팅을 입력하세요"}
        onKeyPress={handleKeyPress}
      ></input>
    </div>
  );
}

export default InputChatBox;
