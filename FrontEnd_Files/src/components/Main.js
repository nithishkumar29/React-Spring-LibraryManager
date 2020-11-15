import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import AdminPage from './AdminPage'
import UserPageReserveBook from './UserPageReserveBook'
import UserPageMyBooks from './UserPageMyBooks'
import LoginForm from './LoginForm'

class Main extends Component {

     componentDidMount() {
         this.props.getBookCategories();
     }

    render() {
        return (
            <div>
            <Route exact path='/' render={({history}) => (
                <div>
                    <LoginForm onHistory={history} {...this.props}/>
                </div>
            )} />
            <Route exact path='/admin' render={() => (
                <div>
                    <AdminPage {...this.props}/>
                </div>
            )} />
            <Route exact path="/user" render={() => (
                <div>
                {this.props.history.push("/reservebook")}
                </div>
            )} />
            <Route exact path='/reservebook' render={() => (
                <div>
                    <UserPageReserveBook {...this.props}/>
                </div>
            )} />
            <Route path='/mybooks' render={() => (
                <div>
                    <UserPageMyBooks {...this.props}/>
                </div>
            )} />
            </div>
        )
    }
}

export default Main