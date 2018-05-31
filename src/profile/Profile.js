import React, {Component} from 'react';
import './Profile.css'

class Profile extends Component {
    state = {
        userId: 0,
        userName: '',
        userQuote: ''
    }

    componentDidMount() {

        fetch(`http://localhost:8088/users/${this.props.match.params.userId}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    userName: data.userName,
                    userQuote: data.userQuote,
                    userId: data.id
                })
            })
    }

    render() {
        return(
            <div className="Profile">
                <h3>{this.state.userName}</h3>
                <p>{this.state.userQuote}</p>
            </div>
        )
    }
}

export default Profile