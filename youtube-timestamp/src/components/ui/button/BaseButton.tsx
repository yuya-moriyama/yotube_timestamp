interface Props {
    type: string
    className: string;
    children: string
    onClick?: () => void;
}

export const BaseButton: React.FC<Props> = (props) => {
    return (
        <input type={props.type} className={props.className} onClick={props.onClick} value={props.children}/>
    );
};
