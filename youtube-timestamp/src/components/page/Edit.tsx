interface Props {
    youtube_url: string;
  }

const Edit: React.FC<Props> = (props) => {
    return (
        <div>
            <h2>Edit</h2>
            <p>{props.youtube_url}</p>
        </div>
    );
};

export default Edit;