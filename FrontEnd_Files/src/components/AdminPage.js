import React, {Component} from 'react'
//import {Route, Link} from 'react-router-dom'
import AdminHeader from './AdminHeader'
import AdminAddUser from './AdminAddUser'
import AdminRegisterBook from './AdminRegisterBook'

class AdminPage extends Component {
    componentDidMount() {
        this.props.getUsersFromDB()
    }
    render() {
        return (
            <div className="admin-page">
                <AdminHeader />
                <AdminAddUser {...this.props}/>
                <AdminRegisterBook {...this.props}/>
            </div>
        )
    }
}
export default AdminPage