import React, { useEffect, useState } from "react";
import { ChatRoomBoxDatas, IChatRoomBox, IProfileBox } from "../mockData";

function RoomListFn() {
  const [roomListData, setRoomListData] = useState<IChatRoomBox[]>([
    {
      id: "",
      imgSrc: "이미지 기본",
      name: `아무개의 방`,
      userList: [],
      chatList: [{ name: "재석", chatContent: "내용없음" }],
    },
  ]);

  useEffect(() => {
    setRoomListData(ChatRoomBoxDatas);
  }, []);
  const AddRoom = (userInfo: IProfileBox, imgSrc: string, name: string) => {
    // let id = "room" + roomListData[roomListData.length-1].id.replace(/[^0-9]/g, "");
    let id;
    let lastId = roomListData[roomListData.length - 1].id;
    if (lastId) {
      id = "room" + lastId.replace(/[^0-9]/g, "");
    }
    let newData = {
      id: id,
      imgSrc: imgSrc ?? "이미지 기본",
      name: name ?? `${userInfo.name}의 방`,
      userList: [userInfo],
      chatList: [
        {
          id: "chat1",
          name: "",
          chatContent: "",
          isMe: true,
          sendTime: "",
        },
      ],
    };
    setRoomListData([...roomListData, newData]);
  };
  const AddChat = (roomId: string, chatContents: string) => {
    let id;
    let data = new Date();
    let lastId = roomListData[roomListData.length - 1].id;
    if (lastId) {
      id = "room" + lastId.replace(/[^0-9]/g, "");
    }
    let newData = {
      id: id,
      name: "재석",
      isMe: true,
      sendTime: `${data}`,
      chatContent: chatContents,
    };
    roomListData.forEach((item) => {
      if (item.id === roomId) {
        let originchat = item.chatList ?? [];
        originchat.push(newData);
        item.chatList = originchat;
      }
    });
    setRoomListData([...roomListData, newData]);
  };
  const DeleteRoomById = (id: string) => {
    let newArray = roomListData.filter((item) => {
      return item.id !== id;
    });
    setRoomListData(newArray);
  };

  return {
    roomListData,
    AddRoom,
    AddChat,
    DeleteRoomById,
  };
}

export default RoomListFn;
