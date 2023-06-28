import React from "react";
import ChatRoomBox from "../Molecules/ChatRoomBox";
import IconBtn from "../Molecules/IconBtn";
import ImageBox from "../Molecules/ImageBox";
import InputTextBox from "../Molecules/InputTextBox";

function ChatRoomList() {
  return (
    <div>
      <ImageBox />
      <IconBtn iconSrc="글쓰기" />
      <InputTextBox />
      <ChatRoomBox />
    </div>
  );
}

export default ChatRoomList;
