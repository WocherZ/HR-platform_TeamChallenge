import React, {useRef, useState} from 'react';
import {useDrag} from 'react-dnd'
import "./css/Card.css"

//Обработчики вне квадрата
const Card = (props: {
    left: number,
    bottom: number,
    setBottom: (n: number) => void,
    rotation: string,
    setIsDown: (b: boolean) => void,
    setStartX: (n: number) => void,
}) => {
    return (
        <div className="card" style={{rotate: props.rotation, left: `${props.left}px`}}
             onTouchStart={e => {
                 props.setStartX(e.touches[0].clientX)
             }}
             onMouseDown={e => {
                 props.setStartX(e.clientX)
                 props.setIsDown(true)
             }}
        >

        </div>
    );
};

export default Card;