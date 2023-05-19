import React, {useEffect, useReducer, useState} from 'react';
import Btn from "../ui/Btn";
import "./css/Chat.css"
import Input from "../ui/Input";
import {useDispatch, useSelector} from "react-redux";
import {store} from "../redux";
import {setChatId} from "../redux/activeChatSlice";
import Calendar from "./Calendar";

const Chat = (props: { onBack?: () => void }) => {
    const [msg, setMsg] = useState("")
    const dispatch = useDispatch()
    // @ts-ignore
    const chatId = useSelector(state => state.activeChat.id)
    const [chooseTime, setChooseTime] = useState(false)

    return (
        <div className="chat">
            {chatId !== -1
                ? <>
                    <div className="head">
                        <div className="back">
                            <Btn text={"Назад"} onClick={() => {
                                dispatch(setChatId(-1))
                                if (props.onBack) {
                                    props.onBack()
                                }
                            }}/>
                        </div>
                        <div className="chat-info"><p>Название</p></div>
                        <Btn className="profile-btn" text={"Профиль"} onClick={() => {
                        }}/>
                        <Btn className="delete-btn" text={"Удалить"} onClick={() => {
                        }}/>
                    </div>
                    <div className="messages">
                        <div className="my">asdasd</div>
                        <div className="other">zxc</div>
                        <div className="my">zxc</div>
                        <div className="other">zxc</div>
                        <div className="my">zxc</div>
                        <div className="other">zxc</div>
                        <div className="other">zxc</div>
                        <div className="other">zxc</div>
                        <div className="other">zxc</div>
                        <div className="my">zxc</div>
                        <div className="my">zxc</div>
                        <div className="other">zxc</div>
                        <div className="my">zxc</div>
                        <div className="other">zxc</div>
                        <div className="my">zxc</div>
                        <div className="other">zxc</div>
                        <div className="my">zxc</div>
                        <div className="other">zxc</div>
                        <div className="other">zxc</div>
                        <div className="other">zxc</div>
                        <div className="other">zxc</div>
                        <div className="my">zxc</div>
                        <div className="my">zxc</div>
                        <div className="choose-time">
                            <Btn text={"Выбрать время собеседования"} onClick={() => {}}/>
                            <Calendar/>
                        </div>
                    </div>
                    <div className="input-field">
                        <Input text={"Сообщение"} value={msg} setValue={setMsg}/>
                        <Btn style={{marginBottom: "20px"}} text={"отправить"} onClick={() => {
                        }}/>
                    </div>

                </>
                : <></>
            }
        </div>
    );
};

export default Chat;