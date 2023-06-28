import { IChatBox } from "./Components/Molecules/ChatBox";
import { IProfileBox } from "./Components/Molecules/ProfileBox";

export let userProfiles: IProfileBox[] = [
  { id: "1", name: "하하" },
  { id: "2", name: "재석" },
  { id: "3", name: "준하" },
];

export let ChatBoxs: IChatBox[] = [
  { id: "1", name: "하하", chatContent: "안녕하세요", isMe: false },
  { id: "2", name: "재석", chatContent: "반갑습니다", isMe: true },
  { id: "3", name: "준하", chatContent: "처음뵙겠습니다", isMe: false },
];
