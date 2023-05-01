import React from 'react';
import { Form } from 'react-bootstrap';
import "./css/SelectInput.css"

const SelectInput = (props: {options: string[], setValue: (s: string) => void}) => {
    return (
        <Form.Select className="select-input" onChange={(e) => {props.setValue(e.target.value)}}>
            <option value="all">Все</option>
            {props.options.map( (opt,i)  =>
                <option key={i} value={opt}>{opt}</option>
            )}
        </Form.Select>
    );
};

export default SelectInput;