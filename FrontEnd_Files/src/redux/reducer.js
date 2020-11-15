import {combineReducers} from 'redux'

//import _users from '../data/users'
//import _books from '../data/books'
//import _bookCategories from '../data/bookCategories'
import _mybooks from '../data/mybooks' 


function bookCategories(state = [], action) {
    switch(action.type) {
        case 'SET_BOOK_CATEGORIES': 
            const bookCategoriesTemp = action.data.map( c => {return c.category})
            return bookCategoriesTemp
        default: return state
    }
}

function mybooks(state = [], action) {
    switch(action.type) {
        case 'GET_MY_BOOKS' : 
            const myBooksData = [];
            for(var i=0; i<action.data.length; i++)
            {
                myBooksData[i] = {
                    id: action.data[i][0],
                    bookName: action.data[i][1],
                    category: action.data[i][2]
                }
            }
            return myBooksData
        case 'RETURN_BOOK':
            const bookIndex1 = state.findIndex(book => book.id === action.book.id)
            return [...state.slice(0, bookIndex1), ...state.slice(bookIndex1+1)]
        default: return state
    }
}

function currentTable(state = [], action) {
    switch(action.type) {
        case 'GET_BOOKS': return action.data
        case 'SEARCH_BOOK_NAME':
            const temp1=[]
            action.books.map((book) => {
                if(book.bookName.toUpperCase().indexOf(action.text.toUpperCase()) != -1) {
                    temp1.push(book)
                }
            })
        return temp1
        case 'SEARCH_BOOK_CATEGORY':
            const temp2=[]
            action.books.map((book) => {
                if(book.category.toUpperCase().indexOf(action.text.toUpperCase()) != -1) {
                    temp2.push(book)
                }
            })
        return temp2
        case 'RESERVE_BOOK':
            const bookIndex1 = state.findIndex(book => book.id === action.book.id)
            let book = {
                id: action.book.id,
                bookName: action.book.bookName,
                category: action.book.category,
                quantity: parseInt(action.book.quantity)-1
            }
            return [...state.slice(0, bookIndex1), book, ...state.slice(bookIndex1+1)]
        default: return state
    }
}

function users(state = [], action) {
    switch(action.type) {
        case 'GET_USERS' : 
            const usersTemp = action.data.map( user => {
                return { 
                    id: user.id,
                    email: user.email, 
                    password: user.password
                } 
            })
            return usersTemp
        case 'CURRENT_LOGGED_USER': return [action.data]
        default: return state   
    }
}

function books(state = [], action) {
    switch(action.type) {
        case 'GET_BOOKS': return action.data
        case 'ADD_BOOK':
            const bookIndex = state.findIndex(book => book.bookId === action.book.bookId)
            if(bookIndex === -1) {
                return [...state, action.book]
            } else {
                let book = {
                    name: action.book.bookName,
                    category: action.book.category,
                    quantity: parseInt(action.book.quantity)+state[bookIndex].quantity
                }
                return [...state.slice(0, bookIndex), ...state.slice(bookIndex+1), book]
            }
        case 'RESERVE_BOOK':
            const bookIndex1 = state.findIndex(book => book.id === action.book.id)
            let book = {
                id: action.book.id,
                bookName: action.book.bookName,
                category: action.book.category,
                quantity: parseInt(action.book.quantity)-1
            }
            return [...state.slice(0, bookIndex1), book, ...state.slice(bookIndex1+1)]
        case 'RETURN_BOOK':
            const bookIndex2 = state.findIndex(book => book.bookName === action.book.bookName)
            let returnBook = {
                name: action.book.bookName,
                category: action.book.category,
                quantity: state[bookIndex2].quantity+1
            }
            return [...state.slice(0, bookIndex2), returnBook, ...state.slice(bookIndex2+1)]
        default: return state 
    }
}


const rootReducer = combineReducers({bookCategories, mybooks, currentTable, users, books})

export default rootReducer
