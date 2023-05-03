import React, {useRef} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "./css/Matches.css"
import Contact from "./Contact";
import Btn from "../ui/Btn";
import Chat from "./Chat";

const Matches = () => {
    const chat = useRef(null)
    const contacts = useRef(null)
    return (
        <div className="matches">
            <Container fluid>
                <Row>
                    <Col className="col contacts" xs={12} sm={12} md={4} ref={contacts}>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                        <Contact onCLick={(e) => {
                            //@ts-ignore
                            chat.current.style.display = "block"
                            //@ts-ignore
                            contacts.current.style.display = "none"
                        }}/>
                    </Col>
                    <Col className="col col-chat" xs={12} sm={12} md={8} ref={chat}>
                        <Chat onBack={() => {
                            //@ts-ignore
                            chat.current.style.display = "none"
                            //@ts-ignore
                            contacts.current.style.display = "block"
                        }}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Matches;