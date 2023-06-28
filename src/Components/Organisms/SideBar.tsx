import React from "react";
import ChatRoomBox from "../Molecules/ChatRoomBox";
import ProfileBox from "../Molecules/ProfileBox";

function SideBar() {
  return (
    <div>
      <ChatRoomBox />
      <ProfileBox />
    </div>
  );
}

export default SideBar;
