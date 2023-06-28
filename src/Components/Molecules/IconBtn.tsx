import React from "react";
import { Link } from "react-router-dom";

interface IIconBtn {
  iconSrc?: string;
  linkPath?: string;
  onClickFn?: any;
}

function IconBtn(props: IIconBtn) {
  const { iconSrc, linkPath, onClickFn } = props;
  return (
    <Link to={linkPath ?? ""}>
      <button onClick={onClickFn}>{iconSrc ?? "버튼"}</button>
    </Link>
  );
}

export default IconBtn;
