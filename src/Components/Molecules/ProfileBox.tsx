import React from "react";

export interface IProfileBox {
  id?: string;
  imgSrc?: string;
  name?: string;
}

function ProfileBox(props: IProfileBox) {
  const { imgSrc, name } = props;
  return (
    <div className="profileBox">
      <div>{imgSrc ?? "이미지"}</div>
      <div>{name ?? "아무개"}</div>
    </div>
  );
}

export default ProfileBox;
