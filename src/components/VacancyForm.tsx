import React, {useState} from 'react';
import Input from "../ui/Input";
import "./css/VacancyForm.css"
import TextInput from "../ui/TextInput";
import {Button, Col, Container, Row} from "react-bootstrap";
import TagsInput from "../ui/TagsInput";
import SelectInput from "../ui/SelectInput";
import Btn from "../ui/Btn";
import {IQuestion} from "../types/types";
import FormRadio from "../ui/FormRadio";

const VacancyForm = () => {
    const [company, setCompany] = useState("")
    const [post, setPost] = useState("")
    const [salary, setSalary] = useState("")
    const [tag, setTag] = useState("")
    const [experience, setExperience] = useState("")
    const [todos, setTodos] = useState("")
    const [reqs, setReqs] = useState("")
    const [desirable, setDesirable] = useState("")
    const [offer, setOffer] = useState("")
    const [questions, setQuestions] = useState<IQuestion[]>([])
    const [display, setDisplay] = useState("none")

    return (
        <div className="vacancy-form" onClick={() => {
            setDisplay("none")
        }}>
            <h3>Создание вакансии</h3>
            <div className="form-container">
                <Input text={"Название компании"} value={company} setValue={setCompany}/>
                <Input text={"Должность"} value={post} setValue={setPost}/>
                <Input text={"Зарплата"} value={salary} setValue={setSalary}/>
                <SelectInput default_={"Опыт не важен"}
                             options={["нет опыта", "меньше года", "1-3 года", "3-6 лет", "больше 6 лет"]}
                             setValue={setExperience}/>
                <TextInput value={todos} setValue={setTodos} label={"Обязанности"}/>
                <TextInput value={reqs} setValue={setReqs} label={"Требования"}/>
                <TextInput value={desirable} setValue={setDesirable} label={"Будет плюсом"}/>
                <TextInput value={offer} setValue={setOffer} label={"Мы предлагаем"}/>
                <Container>
                    <Row>
                        <Col xs={4} sm={4}>
                            <h3>Ключевые навыки</h3>
                        </Col>
                        <Col xs={8} sm={8}>
                            <TagsInput display={display} setDisplay={setDisplay} text={"Навыки"} value={tag} setValue={setTag}/>
                        </Col>
                    </Row>
                </Container>
                {questions.map((q, i) =>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "top", width: "100%"}}>
                        <div style={{width: "100%"}}>
                            <TextInput value={q.question} setValue={(val) => {
                                let copy_questions = [...questions]
                                copy_questions[i].question = val
                                setQuestions(copy_questions)
                            }} label={"Вопрос"}/>
                            <FormRadio name={"variants"}
                                       variants={
                                           q.variants.map((v, j) =>
                                               <div style={{display: "flex", flexDirection: "row"}}>
                                                   <Input text={"Вариант ответа"} value={v} setValue={val => {
                                                       let copy_questions = [...questions]
                                                       copy_questions[i].variants[j] = val
                                                       setQuestions(copy_questions)
                                                   }}/>
                                                   <Btn text={"Del"} onClick={() => {
                                                       let copy_questions = [...questions]
                                                       copy_questions[i].variants = copy_questions[i].variants.filter((vr, k) => j != k)
                                                       setQuestions(copy_questions)
                                                   }}/>
                                               </div>
                                           )
                                       }
                                       values={q.variants}
                                       onChange={(e) => {
                                           let copy_questions = [...questions]
                                           copy_questions[i].answer = e.target.id
                                           setQuestions(copy_questions)
                                       }}/>
                            <Btn className="add-variant" text={"Добавить вариант ответа"} onClick={() => {
                                let copy_questions = [...questions]
                                copy_questions[i].variants.push("")
                                setQuestions(copy_questions)
                            }
                            }/>
                        </div>
                        <div>
                            <Btn text={"Del"} onClick={() => {
                                setQuestions(questions.filter(quest => quest != q))
                            }}/>
                        </div>
                    </div>
                )}

                <Btn text={"Добавить тестовый вопрос"} onClick={() => {
                    setQuestions([...questions, {question: "", variants: [], answer: ""}])
                }}/>
                <Btn className="publish" text={"Опубликовать вакансию"} onClick={() => {
                }}/>
            </div>
        </div>
    );
};

export default VacancyForm;