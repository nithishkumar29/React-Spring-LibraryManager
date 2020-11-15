import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './components/App'
import './stylesheets/stylesheet.css'
import './stylesheets/personPageStylesheet.css'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store=createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))
ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'));
