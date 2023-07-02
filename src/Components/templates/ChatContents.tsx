import React from "react";
import ChatBox from "../Molecules/ChatBox";
import ChatRoomBox from "../Molecules/ChatRoomBox";
import { IChatBox, IChatRoomBox } from "../../mockData";
import InputChatBox from "../Molecules/InputChatBox";
import IconBtn from "../Molecules/IconBtn";

interface IChatContentsProps {
  toggle: boolean;
  chatInputFn?: any;
  data?: IChatRoomBox;
  DeleteRoomById?: any;
  toggleOnOff: any;
}

function ChatContents(props: IChatContentsProps) {
  const { toggle, chatInputFn, data, DeleteRoomById, toggleOnOff } = props;

  const handleKeyUp = (e: any) => {
    if (e.key === "Enter") {
      let content = e.target.value;
      e.preventDefault();
      chatInputFn(data?.id, content);
    }
  };
  const handleDeleteRoomById = (id: string) => {
    DeleteRoomById(data?.id);
    toggleOnOff(false);
  };
  return (
    <>
      {toggle && (
        <div className="chatContents">
          <ChatRoomBox
            imgSrc={data?.imgSrc}
            name={data?.name}
            recentChat={data?.recentChat}
          />
          <IconBtn iconSrc="채팅방 나가기" onClickFn={handleDeleteRoomById} />
          <div className="chatListBox">
            {data?.chatList?.map((item) => {
              return (
                <ChatBox
                  id={item.id}
                  imgSrc={item.imgSrc}
                  chatContent={item.chatContent}
                  sendTime={item.sendTime}
                  name={item.name}
                  isMe={item.isMe}
                />
              );
            })}
          </div>
          <div className="chatInputBox">
            <InputChatBox handleInputEnter={handleKeyUp} />
          </div>
        </div>
      )}
    </>
  );
}

export default ChatContents;
