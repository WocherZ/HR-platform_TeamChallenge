import React from 'react';
import "./css/Profile.css"
import {Accordion, Button, Col, Container, Image, Row} from "react-bootstrap";
import Btn from "../ui/Btn";
import {useNavigate} from "react-router";
import Resume from "./Resume";

const Profile = () => {
    const navigate = useNavigate()
    return (
        <div className="profile">
            <Container fluid>
                <Row style={{display: "flex", justifyContent: "center"}}>
                    <Col xs={4} sm={4} lg={2}>
                        <Image className="ava" src={require("./images/ava.jpg")}/>
                    </Col>
                    <Col xs={8} sm={8} lg={4} xl={3} style={{display: "flex", justifyContent: "center"}}>
                        <div>
                            <div className="line">
                                <div><p>ФИО:</p></div>
                                <div><p>Фамилия Имя Отчество</p></div>
                            </div>
                            <div className="line">
                                <div><p>Телефон:</p></div>
                                <div><p>8-999-999-99-99</p></div>
                            </div>
                            <div className="line">
                                <div><p>Почта:</p></div>
                                <div><p>xxxxxxxxxx@gmail.com</p></div>
                            </div>
                            <div className="line">
                                <div><p>Дата рождения:</p></div>
                                <div><p>dd.mm.yyyy</p></div>
                            </div>
                            <div className="line">
                                <Btn text={"Добавить резюме"} onClick={() => {
                                    navigate("/resume_form")
                                }}/>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="resumes">
                    <Col className="col" xs={12} sm={12} style={{display: "flex", justifyContent: "center"}}>
                        <h1>Мои резюме</h1>
                    </Col>
                    <Col className="col" xs={12} sm={12} style={{display: "flex", justifyContent: "center"}}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Программист. Frontend-разработчик</Accordion.Header>
                                <Accordion.Body>
                                    <Resume/>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Программист. Frontend-разработчик</Accordion.Header>
                                <Accordion.Body>
                                    <Resume/>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Программист. Frontend-разработчик</Accordion.Header>
                                <Accordion.Body>
                                    <Resume/>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Profile;