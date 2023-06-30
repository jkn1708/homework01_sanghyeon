import React from "react";
import ChatRoomBox from "../Molecules/ChatRoomBox";
import DropDown from "../Organisms/DropDown";

interface ISideBar {
  toggle? : boolean;
  data? : any;
}


function SideBar(props : ISideBar) {
  
  const {toggle,data} = props 

  return (
    <>
    {    
      toggle &&
      <div>
      <ChatRoomBox />
      <DropDown/> 
      </div>
    }
    </>
  );
}

export default SideBar;
