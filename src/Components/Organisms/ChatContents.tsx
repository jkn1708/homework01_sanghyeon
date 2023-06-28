import React from "react";
import ChatBox, { IChatBox } from "../Molecules/ChatBox";
import ChatRoomBox, { IChatRoomBox } from "../Molecules/ChatRoomBox";

interface IChatContents {
  chatNameInfo?: IChatRoomBox;
  chatContents?: IChatBox[];
}

function ChatContents(props: IChatContents) {
  const { chatNameInfo, chatContents } = props;
  return (
    <div className="chatContents">
      <ChatRoomBox />
      <div className="chatListBox">
        <ChatBox />
      </div>
    </div>
  );
}

export default ChatContents;
