import React, {useEffect, useRef, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "./css/Search.css"
import SelectInput from "../ui/SelectInput";
import RangeInput from "../ui/RangeInput";
import Card from "./Card";
import Btn from "../ui/Btn";
import Resume from "./Resume";
import {
    getCities,
    getPosts,
    getProfessions,
    getResume,
    getResumes,
    getVacancies,
    getWorkExperiences,
    setLike
} from "../api/Api";
import {setExperiences} from "../redux/experiencesSlice";
import {ICity, IPost, IProfession, IResume, IVacancy, IWorkExperience} from "../types/types";
import {useSelector} from "react-redux";
import Vacancy from "./Vacancy";

const Search = () => {
    const [professions, setProfessions] = useState([] as IProfession[])
    const [posts, setPosts] = useState([] as IPost[])
    const [cities, setCities] = useState([] as ICity[])
    const [workExperiences, setWorkExperiences] = useState([] as IWorkExperience[])
    const [cards, setCards] = useState<IResume[] | IVacancy[]>([])
    // @ts-ignore
    const user = useSelector(state => state.user)

    const [profession, setProfession] = useState("")
    const [post, setPost] = useState("")
    const [city, setCity] = useState("")
    const [experience, setExperience] = useState("")
    const [salaryFrom, setSalaryFrom] = useState("0")
    const [salaryTo, setSalaryTo] = useState("400000")
    const [left, setLeft] = useState(0)
    const [bottom, setBottom] = useState(0)
    const [rotation, setRotation] = useState("0deg")
    const [isDown, setIsDown] = useState(false)
    const [startX, setStartX] = useState(0)
    const like = useRef(null)
    const dislike = useRef(null)
    const moreInfo = useRef(null)
    const moreInfoPanel = useRef(null)
    const [decision, setDecision] = useState<"" | "like" | "dislike">("")

    const [selfFormId, setSelfFormId] = useState(0)

    useEffect(() => {
        Promise.all([getProfessions(), getCities(), getWorkExperiences()]).then(
            ([professions, cities, experiences]: [IProfession[], ICity[], IWorkExperience[]])=> {
                setProfessions(professions)
                setCities(cities)
                setExperiences(experiences)
            }
        )
        user?.role == "user"
            ? getVacancies().then(
                vals => {
                    setCards(vals)
                }
            )
            : getResumes().then(
                vals => {
                    setCards(vals)
                }
            )

    }, [])

    useEffect(() => {
        getPosts(profession).then(
            vals => {
                setPosts(vals)
            }
        )
    }, [profession])

    return (
        <div className="search">
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={4} xl={3} style={{padding: 0}}>
                        <Container fluid>
                            <Row className="filters">
                                <Col xs={6} sm={6} md={12} xl={12} className="filter">
                                    <h3>Профессия</h3>
                                    <SelectInput default_={"Все"}
                                                 options={professions.map(p => p.profession)}
                                                 setValue={setProfession}/>
                                </Col>
                                <Col xs={6} sm={6} md={12} xl={12} className="filter">
                                    <h3>Должность</h3>
                                    <SelectInput default_={"Все"}
                                                 options={posts.map(p => p.post)}
                                                 setValue={setPost}/>
                                </Col>
                                <Col xs={6} sm={6} md={12} xl={12} className="filter">
                                    <h3>Город</h3>
                                    <SelectInput default_={"Все"}
                                                 options={cities.map(c => c.city)}
                                                 setValue={setCity}/>
                                </Col>
                                <Col xs={6} sm={6} md={12} xl={12} className="filter">
                                    <h3>Опыт работы</h3>
                                    <SelectInput default_={"Опыт не важен"}
                                                 options={workExperiences.map(w => w.workExperience)}
                                                 setValue={setExperience}/>
                                </Col>
                                <Col xs={6} sm={6} md={12} xl={12} className="filter">
                                    <h3>Зарплата</h3>
                                    <RangeInput label={"От"} minVal={0} maxVal={400000} value={salaryFrom}
                                                setValue={setSalaryFrom}/>
                                    <RangeInput label={"До"} minVal={0} maxVal={400000} value={salaryTo}
                                                setValue={setSalaryTo}/>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col xs={12} sm={12} md={8} xl={9} className="cards"
                         onMouseMove={e => {
                             if (isDown) {
                                 if (e.clientX > startX + 100) {
                                     setRotation("15deg")
                                     setLeft(100)
                                     //@ts-ignore
                                     like.current.style.opacity = 0.5
                                     //@ts-ignore
                                     dislike.current.style.opacity = 0
                                     setDecision("like")

                                 } else if (e.clientX < startX - 100) {
                                     setRotation("-15deg")
                                     setLeft(-100)
                                     //@ts-ignore
                                     like.current.style.opacity = 0
                                     //@ts-ignore
                                     dislike.current.style.opacity = 0.5
                                     setDecision("dislike")
                                 } else {
                                     setDecision("")
                                 }
                             }
                         }}
                         onMouseUp={e => {
                             e.preventDefault()
                             setIsDown(false)
                             setLeft(0)
                             setRotation("0deg")
                             setBottom(0)
                             //@ts-ignore
                             like.current.style.opacity = 0
                             //@ts-ignore
                             dislike.current.style.opacity = 0
                             if (decision !== "") {
                                 setLike(selfFormId, cards[0]?.id as number, decision).then()
                             }
                             setDecision("")
                         }}
                         onMouseLeave={e => {
                             e.preventDefault()
                             setIsDown(false)
                             setLeft(0)
                             setRotation("0deg")
                             setBottom(0)
                             //@ts-ignore
                             like.current.style.opacity = 0
                             //@ts-ignore
                             dislike.current.style.opacity = 0
                             setDecision("")
                         }}
                         onTouchMove={e => {
                             if (e.touches[0].clientX > startX + 80) {
                                 setRotation("10deg")
                                 setLeft(20)
                                 //@ts-ignore
                                 like.current.style.opacity = 0.5
                                 //@ts-ignore
                                 dislike.current.style.opacity = 0
                                 setDecision("like")

                             } else if (e.touches[0].clientX < startX - 80) {
                                 setRotation("-10deg")
                                 setLeft(-20)
                                 //@ts-ignore
                                 like.current.style.opacity = 0
                                 //@ts-ignore
                                 dislike.current.style.opacity = 0.5
                                 setDecision("dislike")
                             } else {
                                 setDecision("")
                             }
                             setDecision("")
                         }}
                         onTouchEnd={e => {
                             setRotation("0deg")
                             setLeft(0)
                             setBottom(0)
                             //@ts-ignore
                             like.current.style.opacity = 0
                             //@ts-ignore
                             dislike.current.style.opacity = 0
                             if (decision !== "") {
                                 setLike(selfFormId, cards[0]?.id as number, decision).then()
                             }

                             setDecision("")
                         }}
                    >
                        <Container fluid>
                            <Row>
                                <div className="card-more-info" ref={moreInfo}>
                                    {user?.role == "user"
                                    ?<Vacancy data={cards[0] as IVacancy}/>
                                    :<Resume data={cards[0] as IResume}/>
                                    }
                                </div>
                                <div className="more-info-panel" ref={moreInfoPanel}>
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <div>
                                            <Btn text={"dislike"} onClick={() => {
                                            }}/>
                                            <Btn text={"Скрыть"} onClick={() => {
                                                //@ts-ignore
                                                moreInfo.current.style.display = "none"
                                                //@ts-ignore
                                                moreInfoPanel.current.style.display = "none"
                                            }}/>
                                            <Btn text={"like"} onClick={() => {
                                            }}/>
                                        </div>
                                    </div>
                                </div>
                                <Col className="col" xs={2} sm={2} md={3}>
                                    <div className="dislike" ref={dislike}></div>
                                </Col>
                                <Col className="col" xs={8} sm={8} md={6}
                                     style={{display: "flex", flexDirection: "column"}}>
                                    <Card left={left}
                                          bottom={bottom}
                                          setBottom={setBottom}
                                          rotation={rotation}
                                          setIsDown={setIsDown}
                                          setStartX={setStartX}
                                          data={cards[0]}
                                    />
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <Btn text={"dislike"} onClick={() => {
                                        }}/>
                                        <Btn text={"more info"} onClick={() => {
                                            //@ts-ignore
                                            moreInfo.current.style.display = "block"
                                            //@ts-ignore
                                            moreInfoPanel.current.style.display = "flex"
                                        }}/>
                                        <Btn text={"like"} onClick={() => {
                                        }}/>
                                    </div>
                                </Col>
                                <Col className="col" xs={2} sm={2} md={3}>
                                    <div className="like" ref={like}></div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Search;