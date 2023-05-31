import { atom } from "recoil";

export const CurrentTimeState = atom<string>({
    key: "CurrentTimeState",
    default: "",
});