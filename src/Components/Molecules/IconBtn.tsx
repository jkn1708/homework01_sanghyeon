import React from "react";
import { Link } from "react-router-dom";

interface IIconBtn {
  iconSrc?: string;
  linkPath?: string;
  onClickFn?: any;
  toggle?: boolean;
}

function IconBtn(props: IIconBtn) {
  const { iconSrc, linkPath, onClickFn, toggle } = props;

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClickFn();
  };

  return (
    <div className={toggle ? "onBtn" : "offBtn"}>
      {linkPath ? (
        <Link to={linkPath}>
          <button onClick={handleOnClick}>{iconSrc ?? "버튼"}</button>
        </Link>
      ) : (
        <button onClick={handleOnClick}>{iconSrc ?? "버튼"}</button>
      )}
    </div>
  );
}

export default IconBtn;
