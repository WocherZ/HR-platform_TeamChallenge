import React, {useState} from 'react';
import {Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import "./css/Login.css"
import Input from "../ui/Input";
import {Link} from "react-router-dom";
import Btn from "../ui/Btn";

const Login = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="login">
            <Container style={{height: "100%"}} fluid>
                <Row style={{height: "100%"}}>
                    <Col className="login-col" xs={12} sm={12} md={12} lg={12}>
                        <div className="login-form">
                            <h1>Вход</h1>
                            <Input text={"Почта"} value={login} setValue={setLogin}/>
                            <Input text={"Пароль"}value={password} setValue={setPassword}/>
                            <Btn text={"Войти"} onClick={() => {console.log(login)}}/>
                            <p style={{fontSize: "0.8em"}}>Не зарегистрированы?<Link to={"/registration"}>Регистрация</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;