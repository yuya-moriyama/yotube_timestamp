import { Form } from "../ui/form/form";

interface Props {
    youtube_url: string;
}

export const Edit: React.FC<Props> = (props) => {
    return (
        <div>
            <h2>Edit</h2>
            <p>{props.youtube_url}</p>
            <Form />
        </div>
    );
};
