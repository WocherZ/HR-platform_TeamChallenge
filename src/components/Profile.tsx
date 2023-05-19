import React from 'react';
import "./css/Profile.css"
import {Accordion, Button, Col, Container, Image, Row} from "react-bootstrap";
import Btn from "../ui/Btn";
import {useNavigate} from "react-router";
import Resume from "./Resume";
import DropDowns from "../ui/DropDowns";

const Profile = () => {
    const navigate = useNavigate()
    return (
        <div className="profile">
            <Container fluid>
                <Row style={{display: "flex", justifyContent: "center"}}>
                    <Col xs={5} sm={4} lg={2}>
                        <Image className="ava" src={require("./images/ava.jpg")}/>
                    </Col>
                    <Col xs={7} sm={8} lg={4} xl={3} style={{display: "flex", justifyContent: "center"}}>
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
                        <DropDowns titles={["прогер", "джавист"]} bodies={[<Resume/>, <Resume/>]}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Profile;