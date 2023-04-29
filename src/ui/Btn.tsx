import React from 'react';
import {Button} from "react-bootstrap";
import "./css/Btn.css"

const Btn = (props: {text: string, onClick: () => void }) => {
    return (
        <Button className="btn" onClick={props.onClick}>
            {props.text}
        </Button>
    );
};

export default Btn;