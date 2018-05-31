//this component loads automatically

import React, { Component } from 'react'
import Message from "./messages/Message";

class Messages extends Component {
    state={
        messages: []
    }

    componentDidMount(){
        fetch('http://localhost:8088/posts/')
        .then(response => response.json())
        .then(data => {
            this.setState({
                messages: data
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.messages.map(message =>
                    <Message userId={message.userId} key={message.id} />
                )}
            </div>
        )
    }
}

export default Messages