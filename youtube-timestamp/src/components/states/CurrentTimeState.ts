import { atom } from "recoil";

export const currentTimeState = atom<string>({
    key: "currentTimeState",
    default: "00:00:00",
});