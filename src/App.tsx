import React, {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./components/About";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Login from "./components/Login";
import {isAuth} from "./api/Api";
import Logout from "./components/Logout";
import Registration from "./components/Registration";
import ResumeForm from "./components/ResumeForm";

function App() {
    return (
        <Fragment>
            <Navigation/>
            <main>
                <Routes>
                    <Route path="/" element={<About/>}/>
                    {isAuth() && <Route path="/profile" element={<Profile/>}/>}
                    {isAuth() && <Route path="/resume_form" element={<ResumeForm/>}/>}
                    <Route path="/search" element={<Search/>}/>
                    {!isAuth() && <Route path="/login" element={<Login/>}/>}
                    {!isAuth() && <Route path="/registration" element={<Registration/>}/>}
                    {isAuth() && <Route path="/logout" element={<Logout/>}/>}
                </Routes>
            </main>
            <Footer/>
        </Fragment>
    );
}

export default App;
