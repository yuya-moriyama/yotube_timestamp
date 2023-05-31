import { useSetRecoilState } from "recoil";
import { urlState } from '../../states/UrlState';
import { useState } from "react";

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
        <div>
            <input type="text" value={inputUrl} onChange={onChangeHandler}/>
            <input type="button" value="load" onClick={onClickHandler}/>
        </div>
    );
};
