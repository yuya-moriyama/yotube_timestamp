import { atom } from 'recoil';
import ReactPlayer from 'react-player';

export const playerState = atom<ReactPlayer | undefined>({
    key: 'playerState',
    default: undefined
});
