interface IBaseInfo {
  id?: string;
  name?: string;
}

export interface IChatBox extends IBaseInfo {
  imgSrc?: string;
  sendTime?: string;
  chatContent?: string;
  isMe?: boolean;
  onclickFn?: any;
}
export interface IProfileBox extends IBaseInfo {
  roomId?: string;
  imgSrc?: string;
}
export interface IChatRoomBox extends IBaseInfo {
  imgSrc?: string;
  userList?: IProfileBox[];
  recentChat?: string;
  chatList?: IChatBox[];
}

//유저정보
export let userProfileDats: IProfileBox[] = [
  { id: "user1", roomId: "1", imgSrc: "하", name: "하하" },
  { id: "user2", roomId: "1", imgSrc: "재", name: "재석" },
  { id: "user3", roomId: "1", imgSrc: "준", name: "준하" },
];

//
let ChatBoxDatas1: IChatBox[] = [
  {
    id: "chat1",
    name: "하하",
    chatContent: "안녕하세요",
    isMe: false,
    sendTime: "2023년 6월 30일",
  },
  {
    id: "chat2",
    name: "재석",
    chatContent: "반갑습니다",
    isMe: true,
    sendTime: "2023년 6월 30일",
  },
  {
    id: "chat3",
    name: "준하",
    chatContent: "처음뵙겠습니다",
    isMe: false,
    sendTime: "2023년 6월 30일",
  },
];

let ChatBoxDatas2: IChatBox[] = [
  {
    id: "chat1",
    name: "삐삐",
    chatContent: "반가워",
    isMe: false,
    sendTime: "2023년 6월 30일",
  },
  {
    id: "chat2",
    name: "삐삐",
    chatContent: "호호",
    isMe: false,
    sendTime: "2023년 6월 30일",
  },
  {
    id: "chat3",
    name: "준하",
    chatContent: "굿나잇",
    isMe: false,
    sendTime: "2023년 6월 30일",
  },
];

let ChatBoxDatas3: IChatBox[] = [
  {
    id: "chat1",
    name: "하하",
    chatContent: "나이가",
    isMe: false,
    sendTime: "2023년 6월 30일",
  },
  {
    id: "chat2",
    name: "재석",
    chatContent: "30",
    isMe: true,
    sendTime: "2023년 6월 30일",
  },
  {
    id: "chat3",
    name: "하하",
    chatContent: "오키",
    isMe: false,
    sendTime: "2023년 6월 30일",
  },
];

let userList1: IProfileBox[] = [
  { id: "user1", roomId: "1", imgSrc: "하", name: "하하" },
  { id: "user2", roomId: "1", imgSrc: "재", name: "재석" },
  { id: "user3", roomId: "1", imgSrc: "준", name: "준하" },
];

let userList2: IProfileBox[] = [
  { id: "user2", roomId: "1", imgSrc: "재", name: "재석" },
  { id: "user3", roomId: "1", imgSrc: "하", name: "준하" },
  { id: "user4", roomId: "1", imgSrc: "재", name: "삐삐" },
];

let userList3: IProfileBox[] = [
  { id: "user1", roomId: "1", imgSrc: "하", name: "하하" },
  { id: "user2", roomId: "1", imgSrc: "재", name: "재석" },
];

//방정보
export let ChatRoomBoxDatas: IChatRoomBox[] = [
  {
    id: "room1",
    name: "단체방1",
    chatList: ChatBoxDatas1,
    userList: userList1,
  },
  { id: "room2", name: "회사", chatList: ChatBoxDatas2, userList: userList2 },
  { id: "room3", name: "하하", chatList: ChatBoxDatas3, userList: userList3 },
];
