import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class UserHeader extends Component {
    render() {
        if(window.location.pathname === "/reservebook") {
            return (
                <div id="user-header">
                    <ul>
                        <Link to="/reservebook"><li><p className="active">Book Management</p></li></Link>
                        <Link to="/mybooks"><li><p>Registered Books</p></li></Link>
                    </ul>
                </div>
            )
        } else if(window.location.pathname === "/mybooks") {
            return (
                <div id="user-header">
                    <ul>
                        <Link to="/reservebook"><li><p>Book Management</p></li></Link>
                        <Link to="/mybooks"><li><p className="active">Registered Books</p></li></Link>
                    </ul>
                </div>
            )
        }

    }
}

export default UserHeader