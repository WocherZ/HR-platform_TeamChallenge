import React, {FC, useRef, useState} from 'react';
import "./css/Card.css"
import TagsContainer from "../ui/TagsContainer";
import {IResume, IVacancy} from "../types/types";
import {type} from "os";

interface ICard {
    left: number,
    bottom: number,
    setBottom: (n: number) => void,
    rotation: string,
    setIsDown: (b: boolean) => void,
    setStartX: (n: number) => void,
    data: IResume | IVacancy,
}

//Обработчики вне квадрата
const Card: FC<ICard> = ({left, bottom, setBottom, rotation, setIsDown, setStartX, data}) => {
    return (
        <div className="card" style={{rotate: rotation, left: `${left}px`}}
             onTouchStart={e => {
                 setStartX(e.touches[0].clientX)
             }}
             onMouseDown={e => {
                 setStartX(e.clientX)
                 setIsDown(true)
             }}
        >
            <div className="info-container">
                <div className="top-part">
                    <h3>{"companyName" in data && data.companyName}</h3>
                    <h3>{data.profession}: {data.post}</h3>
                    <p>{data.city}</p>
                    <p>{data.salary}</p>
                    <p>Опыт работы: {data.workExperience}</p>
                    {"todos" in data && <p>Обязанности: {data.todos}</p>}
                    <p>{"education" in data && data.education}</p>
                    <p>{"description" in data && data.description}</p>
                </div>
            </div>
            <div className="scroll-container">
                <TagsContainer
                    tags={data.skills}/>
            </div>
        </div>
    );
};

export default Card;