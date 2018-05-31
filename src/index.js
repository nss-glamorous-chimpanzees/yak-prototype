import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./nav/NavBar";
import Messages from "./Messages";
import Profile from "./profile/Profile"

ReactDOM.render((
    <Router>
        <div>
            <NavBar/>
            <Route exact path="/" component={Messages} />
            <Route exact path="/profile/:userId" component={Profile} />
        </div>
    </Router>
), document.querySelector("#root"))