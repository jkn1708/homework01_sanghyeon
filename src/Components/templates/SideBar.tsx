import React from "react";
import { IChatRoomBox } from "../../mockData";
import ChatRoomBox from "../Molecules/ChatRoomBox";
import DropDown from "../Organisms/DropDown";

interface ISideBar {
  toggle?: boolean;
  data?: IChatRoomBox;
}

function SideBar(props: ISideBar) {
  const { toggle, data } = props;

  return (
    <>
      {toggle && (
        <div>
          <ChatRoomBox imgSrc={data?.imgSrc} name={data?.name} />
          <DropDown data={data ?? {}} />
        </div>
      )}
    </>
  );
}

export default SideBar;
