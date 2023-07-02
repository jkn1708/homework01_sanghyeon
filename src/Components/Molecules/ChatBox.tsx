import React from "react";
export interface IChatBox {
  id?: string;
  imgSrc?: string;
  name?: string;
  sendTime?: string;
  chatContent?: string;
  isMe?: boolean;
}
function ChatBox(props: IChatBox) {
  const { id, imgSrc, name, sendTime, chatContent, isMe } = props;
  return (
    <div className={isMe ? "chatBoxRight" : ""}>
      <div>
        <div className="chatTitle">
          <div>{imgSrc ?? ""}</div>
          <div>{name ?? "이름"}</div>
          <div>{sendTime ?? "6월 30일"}</div>
        </div>
        <div className="chatText">{chatContent ?? "내용"}</div>
      </div>
    </div>
  );
}

export default ChatBox;
