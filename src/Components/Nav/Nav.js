import React, { Component } from 'react';
import { connect } from 'react-redux';



class Nav extends Component {

    render() {
        return (
            <section>
                <div className="nav">
                    <button className="Home">Home</button>
                    <button className="New post">New Post</button>
                    <button className="Logout">Logout</button>
                </div>
                <div className = "profile">
                    <span>{this.props.username}</span>
                    <img>{this.props.profilePic}</img>
                </div>

            </section>


        )
    }
}

function mapStateToProps(state) {

}


export default connect(mapStateToProps)(Nav);