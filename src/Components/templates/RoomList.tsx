import React, { useRef } from "react";
import RoomListFn from "../../Hooks/RoomListFn";
import { IChatRoomBox } from "../../mockData";
import ChatRoomBox from "../Molecules/ChatRoomBox";
import IconBtn from "../Molecules/IconBtn";
import ImageBox from "../Molecules/ImageBox";
import InputRoomNameBox from "../Molecules/InputRoomNameBox";

interface IChatRoomListProps {
  data: IChatRoomBox[];
  handleClickRoomBox?: any;
  handleInputEnter?: any;
  toggleOnOff?: any;
}

function ChatRoomList(props: IChatRoomListProps) {
  const { data, handleClickRoomBox, handleInputEnter, toggleOnOff } = props;

  return (
    <div>
      <ImageBox />
      <div className="makeRoomBoxs">
        <InputRoomNameBox handleInputEnter={handleInputEnter} />
      </div>
      {data.map((item, idx) => {
        return (
          <div
            className="roomBox"
            onClick={() => {
              handleClickRoomBox(data[idx]);
              toggleOnOff(true);
            }}
            key={idx}
          >
            <ChatRoomBox
              key={item.id}
              imgSrc={item.imgSrc}
              name={item.name}
              recentChat={
                item.chatList
                  ? item.chatList[item.chatList.length - 1].chatContent
                  : "내용이 없습니다"
              }
            />
          </div>
        );
      })}
    </div>
  );
}

export default ChatRoomList;
