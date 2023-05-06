import React, {FC} from 'react';
import {Button} from "react-bootstrap";
import "./css/Btn.css"

interface IButton {
    text: string,
    onClick: () => void,
    className?: string,
}

const Btn: FC<IButton> = ({className, text, onClick}) => {
    return (
        <Button className={"btn " + className} onClick={onClick}>
            {text}
        </Button>
    );
};

export default Btn;