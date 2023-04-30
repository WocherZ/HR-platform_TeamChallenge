import React, {useRef, useState} from 'react';
import "./css/ChoiceInput.css"
import {Form, InputGroup} from "react-bootstrap";
import Btn from "./Btn";

const ChoiceInput = (props: {
    text: string,
    value: string,
    setValue: (s: string) => void
}) => {
    const [tags, setTags] = useState<String []>([])
    const choiceField = useRef(null)
    const [choice, setChoice] = useState(["CSS", "JS", "HTML", "Java", "Spring", "CSS", "JS", "HTML", "Java", "Spring"])
    return (
        <div className="choice-input">
            <div className="tags">
                {tags.map(t =>
                    <div className="tag">{t}</div>
                )}
            </div>
            <InputGroup className="mb-3">
                <InputGroup.Text className="input-text" id="basic-addon">{props.text}</InputGroup.Text>
                <Form.Control
                    aria-describedby="basic-addon"
                    value={props.value}
                    onChange={e => {props.setValue(e.target.value)}}
                    onFocus={e => {
                        // @ts-ignore
                        choiceField.current.style.display = "block"
                    }}
                />
            </InputGroup>
            <div className="choice-field" ref={choiceField}>
                <div className="close-btn"><Btn text={"X"} onClick={() => {
                    // @ts-ignore
                    choiceField.current.style.display = "none"
                }}/></div>
                {choice.map(ch =>
                    <Btn text={ch} onClick={() => {setTags([...tags, ch])}}/>
                )}
            </div>
        </div>
    );
};

export default ChoiceInput;