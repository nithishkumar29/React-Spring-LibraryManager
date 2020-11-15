import React, {Component} from 'react'

class AdminAddUser extends Component {
    constructor() {
        super()
        this.formSubmit = this.formSubmit.bind(this)
    }

    formSubmit(event) {
        event.preventDefault()
        const email = event.target.elements.email.value
        const password = event.target.elements.password.value
        //console.log(user)
        this.props.addUserToDB(email, password)
    }

    render() {
        return (
            <div className='admin-add-user'>
                <h4>Add User</h4>
                <form onSubmit={this.formSubmit} className="form-add-user">
                    <input type="email" placeholder="Enter email" name="email" required />
                    <input type="password" placeholder="Enter password" name="password" required />
                    <button type="submit">ADD USER</button>
                </form>
            </div>
        )
    }
}

export default AdminAddUser