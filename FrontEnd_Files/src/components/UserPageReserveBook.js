import React, {Component} from 'react'
//import {Route, Link} from 'react-router-dom'
import UserHeader from './UserHeader'
import LibraryBooks from './LibraryBooks'

class UserPageReserveBook extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="user-page">
                <UserHeader />
                <LibraryBooks {...this.props} />
            </div>
        )
    }
}
export default UserPageReserveBook