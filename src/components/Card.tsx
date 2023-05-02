import React, {useRef, useState} from 'react';
import "./css/Card.css"
import TagsContainer from "../ui/TagsContainer";

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
            <div className="info-container">
                <div className="top-part">
                    <h3>Провессия. Должность</h3>
                    <p>Дата рождения: dd.mm.yyyy</p>
                    <p>Город: Город</p>
                    <p>Образование: Высшее</p>
                    <p>Желаемая зарплата: 99999р</p>
                    <p>Опыт работы: 0 лет</p>
                </div>
            </div>
            <div className="scroll-container">
                <TagsContainer
                    tags={["asd", "asd", "skd", "asd", "asd", "skd", "asd", "asd", "skd", "asd", "asd", "skd",
                        "asd", "asd", "skd", "asd", "asd", "skd", "asd", "asd", "skd", "asd", "asd", "skd",
                    ]}/>
            </div>
        </div>
    );
};

export default Card;