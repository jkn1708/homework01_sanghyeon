import React from "react";

interface IInputRoomNameBox {
  placeHolder?: string;
  handleInputEnter?: any;
}

function InputRoomNameBox(props: IInputRoomNameBox) {
  const { placeHolder, handleInputEnter } = props;
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      if (e.target.value !== "") {
        let name = e.target.value;
        let userInfo = { id: "user2", roomId: "1", imgSrc: "재", name: "재석" };
        handleInputEnter(userInfo, null, name);
        e.target.value = "";
      }
    }
  };
  return (
    <div>
      <input
        placeholder={placeHolder ?? "방이름"}
        onKeyPress={handleKeyPress}
      ></input>
    </div>
  );
}

export default InputRoomNameBox;
