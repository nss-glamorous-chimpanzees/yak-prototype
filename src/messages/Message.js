import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Profile from "../profile/Profile";


class Message extends Component {
    
    state = {
        postId: 0,
        userId: 0,
        content: "",
        userName: ""
    }

    componentDidMount() {
        
        fetch(`http://localhost:8088/posts/${this.props.userId}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    postId: data.id,
                    userId: data.userId,
                    content: data.content
                })
                return fetch(`http://localhost:8088/users?id=${this.state.userId}`)
            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    userName: data[0].userName
                })
            })
    }

    render() {
        return(
            <Router>
                <div className="message">
                    <h3><Link to={`${this.state.userName}`}>{this.state.userName}</Link></h3>
                    <p>{this.state.content}</p>
                <Route path={`${this.state.userName}`} component={Profile} userId={this.state.userId} />
                </div>
            </Router>
        )
    }
}

export default Message