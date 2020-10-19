import axios from 'axios';
import React, { Component } from 'react';
import { getUser } from '../../redux/reducer';
import { connect } from 'react-redux';
import '../Auth/auth.css';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            verPassword: ''
        }
    }

    componentDidMount(){
        if(this.props.getUser.username){
            this.props.history.push('./dashboard')
        }
    }

    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleRegister = () => {
        const { username, password, verPassword } = this.state;
        if (password && password === verPassword) {
            axios.post('/api/register', { username, password })
                .then(res => {
                    this.props.getUser(res.data);
                    this.props.history.push('/');
                })
                .catch(err => console.log(err));
        } else {
            alert("Passwords don't match")
        }
    }
    handleLogin = () => {
        const { username, password } = this.state;


        axios.post('/api/login', { username, password })
            .then(res => {
                this.props.getUser(res.data);
                this.props.history.push('/dashboard');
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div className="authview">
                <section className='authbody'>
                    <img className="robot" src="https://robohash.org/GNK.png?set=set1&size=150x150" alt='' />
                    <h1>Helo</h1>
                    <form className='login-form'>
                        <span>Username: <input
                            value={this.state.username}
                            name='username'
                            placeholder='Username'
                            onChange={(e) => this.handleInput(e)} /></span>
                        <span>Password: <input
                            type='password'
                            value={this.state.password}
                            name="password"
                            placeholder='Password'
                            onChange={(e) => this.handleInput(e)} /></span>
                        <button onClick={this.handleLogin}>Login</button>
                        <button onClick={this.handleRegister}>Register</button>

                    </form>

                    <br />

                </section>

            </div>

        )
    }
}

export default connect(null, { getUser })(Auth);