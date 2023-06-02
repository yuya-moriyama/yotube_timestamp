import { OnProgressProps } from 'react-player/base';
import { useRecoilState } from "recoil";
import ReactPlayer from 'react-player';
import { Player } from "../model/player/Player";
import { UrlForm } from "../model/url/UrlForm";
import { useState } from 'react';
import { TimestampList } from "../model/timestamp/TimestampList";
import { convertTimestamp } from '../../utils/Time';
import { currentTimeState } from '../states/CurrentTimeState';

export const Edit: React.FC = () => {
    const [player, setPlayer] = useState<ReactPlayer>()
    const [currentTime, setCurrentTime] = useRecoilState<string>(currentTimeState)

    const onClickTimestamp = () => {
        alert(currentTime)
    }

    const onClickExport = () => {
        alert("export")
    }

    const onProgresshandler = (progress: OnProgressProps) => {
        setCurrentTime(convertTimestamp(progress.playedSeconds));
    }

    return (
        <div className="container mt-3 my-md-4 px-4">
            <div className='title'>
                <h1 className="border-bottom pb-2 mb-3">Youtube Timestamp</h1>
            </div>
            <div className='row mb-3'>
                <UrlForm />
            </div>
            <div className="row mb-3">
                <div className='col pe-1'>
                    <div className="row mb-2 mx-0">
                        <Player setPlayer={setPlayer} onProgresshandler={onProgresshandler} />
                    </div>
                    <div className="row">
                        <div className='col'>
                            <h2 className='m-0'>{currentTime}/99:99:99</h2>
                        </div>
                        <div className='col'>
                            <input type='button' className='btn btn-info w-100' onClick={onClickTimestamp} value="timestamp!" />
                        </div>
                        <div className='col'>
                            <input type='button' className='btn btn-outline-success w-100' onClick={onClickExport} value="export" />
                        </div>
                    </div>
                </div>
                <div className='col ps-1'>
                    <TimestampList />
                </div>
            </div>
            <div className='row mb-3'>
            </div>
        </div>
    );
};
