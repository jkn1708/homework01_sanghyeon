import React, { useState } from "react";
import IconBtn from "../Molecules/IconBtn";
import ProfileBox from "../Molecules/ProfileBox";
import ShowHideToggleFn from "../../Hooks/ShowHideToggleFn";
import { IChatRoomBox } from "../../mockData";

interface IDropDownProps {
  toggle?: boolean;
  data: IChatRoomBox;
}

function DropDown(props: IDropDownProps) {
  const { toggle, data } = props;
  const { toggleState, setToggleReverse } = ShowHideToggleFn(toggle ?? false);
  let datas = data.userList ?? [];
  return (
    <div>
      <IconBtn
        iconSrc="Members"
        toggle={toggleState}
        onClickFn={setToggleReverse}
      />
      {toggleState
        ? datas.map((item, idx) => {
            return (
              <ProfileBox
                key={idx}
                id={item.id}
                imgSrc={item.imgSrc}
                name={item.name}
              />
            );
          })
        : ""}
    </div>
  );
}

export default DropDown;
