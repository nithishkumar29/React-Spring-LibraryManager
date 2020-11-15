import React, {Component} from 'react'
//import {Route, Link} from 'react-router-dom'
//import '../stylesheets/stylesheet.css'
import axios from 'axios'

class LoginForm extends Component {
    constructor() {
        super()
        this.formSubmit = this.formSubmit.bind(this)
    }

    formSubmit(event) {
        event.preventDefault()
        console.log("Form Submitted")
        const email = event.target.elements.email.value
        const password = event.target.elements.password.value
        const person = event.target.elements.person.value

        const credentials = {
            email: email,
            password: password,
            person: person
        }
        if (person === "user"){
            axios.get("http://localhost:8080/getUser?email="+email+"&password="+password)
            .then(({data}) => {
                if(data.length === 0)
                {
                    alert("INCORRECT CREDENTIALS")
                }
                else {
                    this.props.setLoggedUser(data[0][0].id, data[0][0].email, data[0][0].password)
                    this.props.onHistory.push('/reservebook')
                }
            })
        }
        else if(person === "admin"){
            this.props.onHistory.push('/admin')
        }
    }

    render() {
        return (
            <div className="form-container">
                <div className="form">
                    <form onSubmit={this.formSubmit}>
                        <input type="email" placeholder="Enter email" name="email" required />
                        <input type="password" placeholder="Enter password" name="password" required />
                        <div className="radio-btns">
                            <div className="radio-btn-1"><input type="radio" id="user" name="person" value="user" required />User</div>
                            <div className="radio-btn-2"><input type="radio" id="admin" name="person" value="admin" required />Admin</div>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm