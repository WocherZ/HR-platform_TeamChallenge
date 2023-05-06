import React, {useEffect, useRef, useState} from 'react';
import "./css/ResumeForm.css"
import Input from "../ui/Input";
import {Col, Container, Form, Row} from "react-bootstrap";
import Btn from "../ui/Btn";
import ChoiceInput from "../ui/ChoiceInput";
import TextInput from "../ui/TextInput";
import FormRadio from "../ui/FormRadio";

const ResumeForm = () => {
    const [profession, setProfession] = useState("")
    const [post, setPost] = useState("")
    const [city, setCity] = useState("")
    const [salary, setSalary] = useState("")
    const [education, setEducation] = useState("")
    const edu = ["Среднее", "Среднее специальное", "Неоконечнное высшее",
        "Высшее", "Бакалавр", "Магистр", "Кандидат наук", "Доктор наук"]
    const [university, setUniversity] = useState([{name: "", faculty: "", specialization: "", lastYear: ""}])
    const [company, setCompany] = useState([{name: "", post: "", todos: "", workFrom: "", workTo: ""}])
    const [info, setInfo] = useState("")
    const [tag, setTag] = useState("")

    return (
        <div className="resume-form">
            <div className="inputs">
                <Input text={"Профессия"} value={profession} setValue={setProfession}/>
                <Input text={"Должность"} value={post} setValue={setPost}/>
                <Input text={"Город"} value={city} setValue={setCity}/>
                <Input text={"Желаемая зарплата"} value={salary} setValue={setSalary}/>
                <Container fluid>
                    <Row>
                        <Col xs={6} sm={6}>
                            <h3>Образование</h3>
                        </Col>
                        <Col xs={6} sm={6}>
                            <FormRadio name={"edu_form"} variants={edu} onChange={e => {
                                setEducation(e.target.value)
                                setUniversity([{
                                    name: "",
                                    faculty: "",
                                    specialization: "",
                                    lastYear: ""
                                }])
                                setCompany([{name: "", post: "", todos: "", workFrom: "", workTo: ""}])
                            }}/>
                        </Col>
                    </Row>
                </Container>
                {education && education !== edu[0] &&<h3>Учебное заведение</h3>}
                {education && education !== edu[0] && university.map((uni, i) =>
                    <div className="university">
                        <div>
                        <Input text={"Учебное заведение"} value={uni.name} setValue={(val) => {
                            let copy_university = [...university]
                            copy_university[i].name = val
                            setUniversity(copy_university)
                        }}/>
                        <Input text={"Факультет"} value={uni.faculty} setValue={(val) => {
                            let copy_university = [...university]
                            copy_university[i].faculty = val
                            setUniversity(copy_university)
                        }}/>

                        <Input text={"Специализация"} value={uni.specialization} setValue={(val) => {
                            let copy_university = [...university]
                            copy_university[i].specialization = val
                            setUniversity(copy_university)
                        }}/>

                        <Input text={"Год окончания"} value={uni.lastYear} setValue={(val) => {
                            let copy_university = [...university]
                            copy_university[i].lastYear = val
                            setUniversity(copy_university)
                        }}/>
                        </div>
                        <div>
                            <Btn text={"Удалить"} onClick={() => {
                                setUniversity(university.filter(u => u != uni))
                            }}/>
                        </div>
                    </div>
                )}
                {education && education !== edu[0] &&
                    <Btn text={"Добавить учебное заведение"} onClick={() => {
                        const copy_university = [...university]
                        copy_university.push({name: "", faculty: "", specialization: "", lastYear: ""})
                        setUniversity(copy_university);
                    }}/>}

                {education && <h3>Опыт работы</h3>}
                {education && company.map( (com,i) =>
                    <div className="company">
                        <div>
                        <Input text={"Название компании"} value={com.name} setValue={(val) => {
                            let copy_company = [...company]
                            copy_company[i].name = val
                            setCompany(copy_company)
                        }}/>
                        <Input text={"Должность"} value={com.post} setValue={(val) => {
                            let copy_company = [...company]
                            copy_company[i].post = val
                            setCompany(copy_company)
                        }}/>

                        <Input text={"Обязанности"} value={com.todos} setValue={(val) => {
                            let copy_company = [...company]
                            copy_company[i].todos = val
                            setCompany(copy_company)
                        }}/>

                        <Input text={"Начало работы"} value={com.workFrom} setValue={(val) => {
                            let copy_company = [...company]
                            copy_company[i].workFrom = val
                            setCompany(copy_company)
                        }}/>
                        <Input text={"Окончание работы"} value={com.workTo} setValue={(val) => {
                            let copy_company = [...company]
                            copy_company[i].workTo = val
                            setCompany(copy_company)
                        }}/>
                        </div>
                        <div>
                            <Btn text={"Удалить"} onClick={() => {
                                setCompany(company.filter(c => c != com))
                            }}/>
                        </div>
                    </div>
                )}
                {education &&
                    <Btn text={"Добавить опыт работы"} onClick={() => {
                        const copy_company = [...company]
                        copy_company.push({name: "", post: "", todos: "", workFrom: "", workTo: ""})
                        setCompany(copy_company);
                    }}/>}
                {education && <TextInput value={info} setValue={setInfo} label={"О себе"}/>}
                {education &&
                    <Container>
                        <Row>
                            <Col xs={4} sm={4}>
                                <h3>Ключевые навыки</h3>
                            </Col>
                            <Col xs={8} sm={8}>
                                <ChoiceInput text={"Навыки"} value={tag} setValue={setTag}/>
                            </Col>
                        </Row>
                    </Container>
                }
                <Btn className="publish" text={"Опубликовать резюме"} onClick={() => {}}/>
            </div>
        </div>
    );
};

export default ResumeForm;