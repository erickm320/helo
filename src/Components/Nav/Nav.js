import React, {Component} from 'react';
import {link, withRouter} from 'react-router-dom';


class Nav extends Component{
    constructor(){
        super();
    }

    componentDidMount(){
        if(this.props.location.pathname){
            this.props.history.push('./Dashboard')
        }
    }
    
    render(){
        console.log(this.props)
        return(
            <div className= "nav">
                <button className= "Home">Home</button>
                <button className="New post">New Post</button>
                <button className="Logout">Logout</button>

            </div>
        )
    }
}

export default withRouter(Nav);