import axios from 'axios';
import React, {Component} from 'react';

class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleRegister = () => {
        const {username, password} = this.state;
        if(password && password === password){
            axios.post('/api/regiester',{username, password})
            .then(res => {
                this.props.getUser(res.data);
                this.props.history.push('/dashboard')
            })
            .catch(err => console.log(err));
        } else{
            alert("Passwords don't match")
        }
    }
    handleLogin = () => {
        const {email, password} = this.state;
        axios.post('/api/login',{email, password})
        .then(res => {
            this.props.getUser(res.data);
            this.props.history.push('/dashboard')
        })
        .catch(err => console.log(err))
    }
    render(){
        return(
            <div className="authview">
                <section className='authbody'>
                    <img className="robot" src = "https://robohash.org/GNK.png?set=set1&size=150x150"/>
                    <h1>Helo</h1>
                    <span>Username: <input/></span>
                    <span>Password: <input/></span>
                    <br/>
                    <button>Login</button>
                    <button>Register</button>
                </section>
                

            </div>

        )
    }
}

export default Auth;