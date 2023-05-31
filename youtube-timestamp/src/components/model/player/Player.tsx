import ReactPlayer from 'react-player';
import { useRecoilValue, useRecoilState} from "recoil";
import { urlState } from '../../states/UrlState';
import { useState } from 'react';
import { CurrentTimeState } from '../../states/CurrentTimeState';
import { convertTimestamp } from '../../../utils/Time';

export const YouTubePlayer = () => {
    const url = useRecoilValue<string>(urlState)
    const [player, setPlayer] = useState<ReactPlayer>()
    const [currentTime, setCurrentTime] = useRecoilState<string>(CurrentTimeState)

    const ref = (player: ReactPlayer) => {
        setPlayer(player)
    }

    const onClickHandler = () => {
        alert(currentTime)
    }

    return (
        <div>
            <ReactPlayer
                url={url}
                ref={ref}
                className="react-player"
                controls={true}
                playing={false}
                onProgress={(progress) => {
                    setCurrentTime(convertTimestamp(progress.playedSeconds));
                }}
            />
            <span>{currentTime}</span>
            <input type='button' onClick={onClickHandler} value="timestamp" />
        </div>
    );
};
