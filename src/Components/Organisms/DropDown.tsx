import React, { useState } from "react";
import IconBtn from "../Molecules/IconBtn";
import ProfileBoxFn from "../../Hooks/ProfileBoxFn";
import ProfileBox from "../Molecules/ProfileBox";
import ShowHideToggleFn from "../../Hooks/ShowHideToggleFn";

interface IDropDown {
    toggle? : boolean;
}


function DropDown(props: IDropDown) {
    const {toggle} = props

    const {toggleState,setToggleOnOff} = ShowHideToggleFn(toggle?? false)
    const {GetProfileBoxData,SetProfileBoxData} = ProfileBoxFn();
  
  return (
    <div>
    <IconBtn iconSrc="Members" toggle={toggleState} onClickFn={setToggleOnOff} />
    { toggleState ? GetProfileBoxData("1").map((item,idx)=>{
      return <ProfileBox key={idx} id={item.id} imgSrc={item.imgSrc} name={item.name}/>
    }) : ""}
    </div>
  );
}

export default DropDown;