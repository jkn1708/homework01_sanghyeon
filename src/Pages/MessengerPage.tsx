import React, { useEffect, useState } from "react";
import RoomList from "../Components/templates/RoomList";
import ChatContents from "../Components/templates/ChatContents";
import SideBar from "../Components/templates/SideBar";
import ShowHideToggleFn from "../Hooks/ShowHideToggleFn";
import RoomListFn from "../Hooks/RoomListFn";

function MessengerPage() {
  const { toggleState, setToggleOnOff, setToggleReverse } =
    ShowHideToggleFn(false);
  const { roomListData, AddRoom, AddChat, DeleteRoomById } = RoomListFn();
  const [currentRoomInfo, setCurrentRoomInfo] = useState(roomListData[0]);

  return (
    <div className="messengerPage">
      <RoomList
        data={roomListData}
        handleClickRoomBox={setCurrentRoomInfo}
        handleInputEnter={AddRoom}
        toggleOnOff={setToggleOnOff}
      />
      <ChatContents
        toggle={toggleState}
        data={currentRoomInfo}
        chatInputFn={AddChat}
        DeleteRoomById={DeleteRoomById}
        toggleOnOff={setToggleOnOff}
      />
      <SideBar toggle={toggleState} data={currentRoomInfo} />
    </div>
  );
}

export default MessengerPage;
