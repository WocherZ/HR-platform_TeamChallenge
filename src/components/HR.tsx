import React from 'react';
import Vacancy from "./Vacancy";
import {Accordion} from "react-bootstrap";
import Resume from "./Resume";

const Hr = () => {
    return (
        <div className="hr">
            <div className="company-info">
                <div>title</div>
                <div>description</div>
            </div>
            <div className="reviews">
                <div>reviews</div>
            </div>
            <div className="vacancies">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Программист. Frontend-разработчик</Accordion.Header>
                        <Accordion.Body>
                            <Vacancy/>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Программист. Frontend-разработчик</Accordion.Header>
                        <Accordion.Body>
                            <Vacancy/>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Программист. Frontend-разработчик</Accordion.Header>
                        <Accordion.Body>
                            <Vacancy/>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Hr;