import React, {FC, useEffect, useState} from 'react';
import {Container, Image} from "react-bootstrap";
import "./css/Contact.css"
import {useDispatch, useSelector} from "react-redux";
import {setChatId} from "../redux/activeChatSlice";
import {setTestId} from "../redux/activeTestSlice";

interface IContact {
    click: (e:any) => void,
    id: number,
    title: string,
    description: string,
    type: "chat" | "test",
}

const Contact: FC<IContact> = ({id, click, title, description, type}) => {
    // @ts-ignore
    const activeChatId = useSelector(state => state.activeChat.id)
    // @ts-ignore
    const activeTestId = useSelector(state => state.activeTest.id)
    const dispatch = useDispatch()

    return (
        <div className={ (type == "chat" && activeChatId == id || type == "test" && activeTestId == id) ? "contact contact-active" : "contact"} onClick={ e => {
            click(e)
            type === "chat" ? dispatch(setChatId(id)) : dispatch(setTestId(id))
        }}>
            <div className="photo">
                <Image src={require("./images/ava.jpg")}/>
            </div>
            <div className="content">
                <div className="title"><p>{title}</p></div>
                <div className="msg"><p>{description}</p></div>
            </div>
        </div>
    );
};

export default Contact;