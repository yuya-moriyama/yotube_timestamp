import {useState} from "react";
import { SubmitButton } from "../button/SubmitButton";

export const Form = () => {
    const [Url, setUrl] = useState("");
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    };

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        console.log(Url);
        event.preventDefault();
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" value={Url} onChange={onChangeHandler} />
            <SubmitButton />
        </form>
    );
}