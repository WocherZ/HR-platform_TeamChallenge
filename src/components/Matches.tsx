import React, {useEffect, useRef, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "./css/Matches.css"
import Contact from "./Contact";
import Btn from "../ui/Btn";
import Chat from "./Chat";
import {useDispatch} from "react-redux";
import {setChatId} from "../redux/activeChatSlice";
import Test from "./Test";
import {setTestId} from "../redux/activeTestSlice";

const Matches = () => {
    const chat = useRef(null)
    const contacts = useRef(null)

    const [menu, setMenu] = useState("chats")
    const dispatch = useDispatch()

    return (
        <div className="matches">
            <Container fluid>
                <Row>
                    <Col className="col contacts" xs={12} sm={12} md={4} ref={contacts}>
                        <div>
                            <Btn className={menu === "chats" ? "btn-active" : ""} text={"Чаты"} onClick={() => {
                                dispatch(setTestId(-1))
                                setMenu("chats")
                            }}/>
                            <Btn className={menu === "tests" ? "btn-active" : ""} text={"Тесты"} onClick={() => {
                                dispatch(setChatId(-1))
                                setMenu("tests")
                            }}/>
                        </div>
                        {menu === "chats"
                            ? <>
                                {[1, 2, 3, 4, 5, 6].map(num =>
                                    <Contact type={"chat"} title={"chat"} description={"description"} click={(e) => {
                                        //@ts-ignore
                                        chat.current.style.display = "block"
                                        //@ts-ignore
                                        contacts.current.style.display = "none"
                                    }}
                                             id={num}/>
                                )}
                            </>
                            : <>
                                {[1, 2, 3, 4, 5, 6].map(num =>
                                    <Contact type={"test"} title={"test"} description={"description"} click={(e) => {
                                        //@ts-ignore
                                        chat.current.style.display = "block"
                                        //@ts-ignore
                                        contacts.current.style.display = "none"
                                    }}
                                             id={num}/>
                                )}
                            </>
                        }
                    </Col>
                    <Col className="col col-chat" xs={12} sm={12} md={8} ref={chat}>
                        {menu === "chats"
                            ?<Chat onBack={() => {
                                //@ts-ignore
                                chat.current.style.display = "none"
                                //@ts-ignore
                                contacts.current.style.display = "block"
                            }
                            }/>
                            :<Test onBack={() => {
                                //@ts-ignore
                                chat.current.style.display = "none"
                                //@ts-ignore
                                contacts.current.style.display = "block"
                            }
                            }/>
                        }

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Matches;