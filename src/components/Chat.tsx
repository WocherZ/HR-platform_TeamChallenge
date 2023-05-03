import React, {useState} from 'react';
import Btn from "../ui/Btn";
import "./css/Chat.css"
import Input from "../ui/Input";

const Chat = (props: {onBack: () => void}) => {
    const [msg, setMsg] = useState("")
    return (
        <div className="chat">
            <div className="head">
                <div className="back">
                    <Btn text={"Назад"} onClick={props.onBack}/>
                </div>
                <div className="chat-info"><p>Название</p></div>
            </div>
            <div className="messages">
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
                <div className="other">zxc</div>
            </div>
            <div className="input-field">
                <Input text={"Сообщение"} value={msg} setValue={setMsg}/>
            </div>
        </div>
    );
};

export default Chat;