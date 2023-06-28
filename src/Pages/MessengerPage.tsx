import React from "react";
import ChatRoomList from "../Components/Organisms/ChatRoomList";
import ChatContents from "../Components/Organisms/ChatContents";
import SideBar from "../Components/Organisms/SideBar";

function MessengerPage() {
  return (
    <div className="messengerPage">
      <ChatRoomList />
      <ChatContents />
      <SideBar />
    </div>
  );
}

export default MessengerPage;
