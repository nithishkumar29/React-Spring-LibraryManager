import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class AdminHeader extends Component {
    render() {
        return (
            <div className="admin-header">
                <div id="admin">
                    <p>Admin User</p>
                </div>
                <div id="logout">
                    <p><Link to="/">Logout</Link></p>
                </div>
            </div>
        )
    
    }
}

export default AdminHeader