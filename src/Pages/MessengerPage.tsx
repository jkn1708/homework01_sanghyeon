import React from "react";
import RoomList from "../Components/templates/RoomList";
import ChatContents from "../Components/templates/ChatContents";
import SideBar from "../Components/templates/SideBar";
import ShowHideToggleFn from "../Hooks/ShowHideToggleFn";

function MessengerPage() {

  const {toggleState, setToggleOnOff} = ShowHideToggleFn(true)

  return (
    <div className="messengerPage">
      <RoomList />
      <ChatContents toggle={toggleState} />
      <SideBar toggle={toggleState}/>
    </div>
  );
}

export default MessengerPage;
