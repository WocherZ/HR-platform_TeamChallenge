import React from 'react';
import {Form} from "react-bootstrap";

const TextInput = (props: {value: string, setValue: (s: string) => void}) => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>О себе</Form.Label>
                    <Form.Control as="textarea" rows={3} value={props.value} onChange={e => {props.setValue(e.target.value)}}/>
                </Form.Group>
            </Form>
        </div>
    );
};

export default TextInput;