import React, { useEffect, useState } from "react";
import { ChatRoomBoxDatas, IProfileBox } from "../mockData";


function RoomListFn() {
  const [roomListData, setRoomListData] = useState<IProfileBox[]>([])
  
  useEffect(() => {
    setRoomListData(ChatRoomBoxDatas)
  }, []);


  const GetRoom = (id:string) => {
    let result = roomListData.filter(item => item.id === id);
    return result;
  }

  const  AddRoom = (userInfo:IProfileBox ,imgSrc :string, name :string) =>{
    // let id = "room" + roomListData[roomListData.length-1].id.replace(/[^0-9]/g, "");
    let id 
    let lastId = roomListData[roomListData.length-1].id
    if(lastId){
      id  = "room" + lastId.replace(/[^0-9]/g, "");
    }
    let newData = {id:id, imgSrc: imgSrc ?? "이미지 기본", name :name ?? `${userInfo.name}의 방`,userList:[userInfo],chatList:[] }
    setRoomListData([...roomListData,newData])
  }
  
  return {GetRoom,AddRoom}
}

export default RoomListFn;