import React from "react";

export interface IChatRoomBox {
  imgSrc?: string;
  name?: string;
  recentChat?: string;
}

function ChatRoomBox(props: IChatRoomBox) {
  const { imgSrc, name, recentChat } = props;
  return (
    <div className="chatBox">
      <div>{imgSrc ?? "이미지"}</div>
      <div>
        <div>{name ?? "아무개"}</div>
        <div>{recentChat ?? " 최근 챗팅"}</div>
      </div>
    </div>
  );
}

export default ChatRoomBox;
