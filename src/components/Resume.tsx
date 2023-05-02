import React from 'react';
import "./css/Resume.css"
import TagsContainer from "../ui/TagsContainer";

const Resume = () => {
    const tags = ["css", "js", "html", "react", "css", "js", "html", "react", "css", "js", "html", "react"]
    return (
        <div className="resume">
            <h3>Основная информация</h3>
            <div className="info-container">
                <div className="line">
                    <div><p>Город:</p></div>
                    <div><p>Москва</p></div>
                </div>
                <div className="line">
                    <div><p>Желаемая зарплата:</p></div>
                    <div><p>120 000р</p></div>
                </div>
                <div className="line">
                    <div><p>Образование:</p></div>
                    <div><p>Неоконченное высшее</p></div>
                </div>
            </div>
            <h3>Учебное заведение</h3>
            <div className="info-container">
                <div className="line">
                    <div><p>Название:</p></div>
                    <div><p>НИЯУ МИФИ</p></div>
                </div>
                <div className="line">
                    <div><p>Факультет:</p></div>
                    <div><p>Прикладная математика</p></div>
                </div>
                <div className="line">
                    <div><p>Специализация:</p></div>
                    <div><p>Прикладная математика и информатика</p></div>
                </div>
                <div className="line">
                    <div><p>Год окончания:</p></div>
                    <div><p>2024</p></div>
                </div>
            </div>
            <h3>Учебное заведение</h3>
            <div className="info-container">
                <div className="line">
                    <div><p>Название:</p></div>
                    <div><p>НИЯУ МИФИ</p></div>
                </div>
                <div className="line">
                    <div><p>Факультет:</p></div>
                    <div><p>Прикладная математика</p></div>
                </div>
                <div className="line">
                    <div><p>Специализация:</p></div>
                    <div><p>Прикладная математика и информатика</p></div>
                </div>
                <div className="line">
                    <div><p>Год окончания:</p></div>
                    <div><p>2024</p></div>
                </div>
            </div>
            <h3>Опыт работы</h3>
            <div className="info-container">
                <div className="line">
                    <div><p>Название компании:</p></div>
                    <div><p>Совкомбанк</p></div>
                </div>
                <div className="line">
                    <div><p>Должность:</p></div>
                    <div><p>Frontend-разработчик</p></div>
                </div>
                <div className="line">
                    <div><p>Обязанности:</p></div>
                    <div><p>Разработка HR-платформы</p></div>
                </div>
                <div className="line">
                    <div><p>Начало работы:</p></div>
                    <div><p>апрель 2023</p></div>
                </div>
                <div className="line">
                    <div><p>Окончание работы:</p></div>
                    <div><p>По настоящее время</p></div>
                </div>
            </div>
            <h3>О себе</h3>
            <div className="info">
                <p>long description long description long description long description
                    long description long description long descriptionlong description
                    long description long descriptionlong description long description
                    long description long description long description
                    long description long description long descriptionlong description
                    long description long descriptionlong description</p>
            </div>
            <h3>Ключевые навыки</h3>
            <TagsContainer tags={tags}/>
        </div>
    );
};

export default Resume;