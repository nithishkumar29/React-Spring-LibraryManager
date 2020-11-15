import React, {Component} from 'react'
import UserHeader from './UserHeader'
import DisplayMyBooks from './DataTableMyBooks'

class UserPageMyBooks extends Component {

    componentDidMount() {
        this.props.getUserBooksFromDB(this.props.users[0]);
    }
    render() {
        return (
            <div className="user-page">
                <UserHeader />
                <DisplayMyBooks {...this.props} />
            </div>
        )
    }
}

export default UserPageMyBooks