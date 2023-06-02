import { useSetRecoilState } from "recoil";
import { urlState } from '../../states/UrlState';
import { useState } from 'react';

export const UrlForm = () => {
    const [inputUrl, setInputUrl] = useState<string>("");
    const setUrl = useSetRecoilState<string>(urlState);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputUrl(e.target.value)
    }

    const onClickHandler = () => {
        setUrl(inputUrl)
    }

    return (
        <div className="input-group">
            <div className="col-10">
                <input className="form-control col" type="text" placeholder="https://www.youtube.com/watch?v=[video_id]" value={inputUrl} onChange={onChangeHandler} />
            </div>
            <div className="col-2 ps-3">
                <div className="input-group-append">
                    <input className="btn btn-primary w-100" type="button" value="load" onClick={onClickHandler} />
                </div>
            </div>
        </div>
    );
};
