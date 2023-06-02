import ReactPlayer from 'react-player';
import { OnProgressProps } from 'react-player/base';
import { useRecoilValue } from "recoil";
import { urlState } from '../../states/UrlState';


interface Props {
    setPlayer: (player: ReactPlayer) => void;
    onProgresshandler: (progress: OnProgressProps) => void;
}

export const Player: React.FC<Props> = (props: Props) => {
    const url = useRecoilValue<string>(urlState)

    return (
    <div className='card p-0'>
        <div className='card-body'>
            <ReactPlayer
                url={url}
                ref={props.setPlayer}
                className="react-player m-0 p-0"
                controls={true}
                playing={false}
                onProgress={props.onProgresshandler}
            />
        </div>
    </div>
    );
};
