import React from "react";
import ChatBox from "../Molecules/ChatBox";
import ChatRoomBox from "../Molecules/ChatRoomBox";
import { IChatBox, IChatRoomBox } from "../../mockData";
import InputTextBox from "../Molecules/InputTextBox";
import IconBtn from "../Molecules/IconBtn";

interface IChatContents {
  toggle: boolean;
  chatNameInfo?: IChatRoomBox;
  chatContents?: IChatBox[];
  data? : any;
}

function ChatContents(props: IChatContents) {
  const { toggle, chatNameInfo, chatContents, data } = props;
  return (
    <>
    { toggle && <div className="chatContents">
      <ChatRoomBox />
      <div className="chatListBox">
        <ChatBox />
        <ChatBox isMe={true}/>
      </div>
      <div className="chatInputBox">      <InputTextBox/>
      <IconBtn iconSrc="입력" /></div>

    </div>}
    
    </>
  );
}

export default ChatContents;
