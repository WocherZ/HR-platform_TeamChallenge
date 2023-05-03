import React from 'react';
import {Container, Image} from "react-bootstrap";
import "./css/Contact.css"

const Contact = (props: {onCLick: (e: any) => void}) => {
    return (
        <div className="contact" onClick={props.onCLick}>
            <div className="photo">
                <Image src={require("./images/ava.jpg")}/>
            </div>
            <div className="content">
                <div className="title"><p>Название</p></div>
                <div className="msg"><p>Автор: Последнее сообщение</p></div>
            </div>
        </div>
    );
};

export default Contact;