import React, { useRef } from "react";

interface IChatRoomBoxProps {
  imgSrc?: string;
  name?: string;
  recentChat?: string;
  onClickFn?: any;
}

function ChatRoomBox(props: IChatRoomBoxProps) {
  const { imgSrc, name, recentChat, onClickFn } = props;
  const intervalId = useRef(null);

  return (
    <div className="chatBox" ref={intervalId}>
      <div>{imgSrc ?? "이미지"}</div>
      <div>
        <div>{name ?? "아무개"}</div>
        <div>{recentChat ?? ""}</div>
      </div>
    </div>
  );
}

export default ChatRoomBox;
