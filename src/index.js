import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./nav/NavBar";
import Messages from "./Messages";

ReactDOM.render((
    <Router>
        <div>
            <NavBar/>
            <Route exact path="/" component={Messages} />
        </div>
    </Router>
), document.querySelector("#root"))