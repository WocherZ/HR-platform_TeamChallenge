import React, {FC, ReactNode, useRef, useState} from 'react';
import "./css/TagsInput.css"
import {Form, InputGroup} from "react-bootstrap";
import Btn from "./Btn";
import TagsContainer from "./TagsContainer";

interface ITagsInput {
    text: string,
    value: string,
    setValue: (s: string) => void,
    display: string,
    setDisplay: (s: string) => void,
}

const TagsInput: FC<ITagsInput> = ({text, value, setValue, display, setDisplay}) => {
    const [tags, setTags] = useState<string []>([])
    const [choice, setChoice] = useState(["CSS", "JS", "HTML", "Java", "Spring", "CSS", "JS", "HTML", "Java", "Spring"])
    return (
        <div className="choice-input">
            <TagsContainer tags={tags} onDelete={(val) => setTags(tags.filter((t, i) => i !== val))}/>
            <InputGroup className="mb-3">
                <InputGroup.Text className="input-text" id="basic-addon">{text}</InputGroup.Text>
                <Form.Control
                    aria-describedby="basic-addon"
                    value={value}
                    onChange={e => {
                        setValue(e.target.value)
                    }}
                    onFocus={e => {
                        setDisplay("block")
                    }}
                    onClick={e => {
                        e.stopPropagation()
                    }}
                />
            </InputGroup>
            <div className="choice-field" style={{display: display}} onClick={e => {
                e.stopPropagation()
            }}>
                {choice.map(ch =>
                    <Btn text={ch} onClick={() => {
                        setTags([...tags, ch])
                    }}/>
                )}
            </div>
        </div>
    );
};

export default TagsInput;