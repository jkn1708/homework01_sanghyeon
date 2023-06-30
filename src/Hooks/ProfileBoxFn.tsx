import React, { useEffect, useState } from "react";
import { IProfileBox, userProfileDats } from "../mockData";


function ProfileBoxFn() {
  const [profileBoxData, setProfileBoxData] = useState<IProfileBox[]>([])
  
  useEffect(() => {
    setProfileBoxData(userProfileDats)
  }, []);


  const GetProfileBoxData = (roomId:string) => {
    let result = profileBoxData.filter(item => item.roomId === roomId);
    return result;
  }

  const  SetProfileBoxData = (id:string, imgSrc :string, name :string) =>{
    let newData = {id: id ?? "", imgSrc: imgSrc ?? "이미지 기본", name :name ?? "이름없음"}
    setProfileBoxData([...profileBoxData,newData])
  }
  
  return {GetProfileBoxData,SetProfileBoxData}
}

export default ProfileBoxFn;