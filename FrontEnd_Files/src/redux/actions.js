import axios from 'axios'

export function getBookCategories() {
    return function(dispatch) {
        return axios.get("http://localhost:8080/categories").then(({data}) => {
            dispatch(setBookCategories(data))
        });
    };
}

export function getUsersFromDB() {
    return function(dispatch) {
        return axios.get("http://localhost:8080/users").then(({data}) => {
            dispatch(getUsers(data))
        });
    };
}

export function getBooksFromDB() {
    return function(dispatch) {
        return axios.get("http://localhost:8080/books").then(({data}) => {
            dispatch(getBooks(data))
        });
    };
}

export function addUserToDB(email, password) {
    return function(dispatch) {
        axios.post("http://localhost:8080/addUser", {
            email: email,
            password: password
        }).then( (response) => {
                console.log(response.statusText);
        });
    };
}

export function addBookToDB(bookName, category, quantity) {
    return function(dispatch) {
        return axios.post("http://localhost:8080/addBook", {
            bookName,
            category,
            quantity
        }).then(({}) => {
            dispatch(addBook(bookName, category, quantity))
        });
    };
}
//reserveBookDB
export function reserveBookDB(book, userId) {
    return function(dispatch) {
        return axios.post("http://localhost:8080/reserveBook", {
            bookId: book.id,
            userId
        }).then(({}) => {
            dispatch(reserveBook(book))
        });
    };
}
//returnBookDB
export function returnBookDB(book, userId) {
    return function(dispatch) {
        return axios.delete("http://localhost:8080/returnBook?userId="+userId+"&bookId="+book.id).then(({}) => {
            dispatch(returnBook(book))
        });
    };
}

export function getUserBooksFromDB(user) {
    return function(dispatch) {
        return axios.get("http://localhost:8080/getUserBooks/"+user.id).then(({data}) => {
            dispatch(getMyBooks(data))
        });
    };
}

export function setBookCategories(data) {
    return {
        type: 'SET_BOOK_CATEGORIES',
        data
    }
}

export function getBooks(data) {
    return {
        type: 'GET_BOOKS',
        data
    }
}
export function setLoggedUser(id, email, password) {
    const data = {
        id,
        email,
        password
    }
    return {
        type: 'CURRENT_LOGGED_USER',
        data
    }
}

export function getMyBooks(data) {
    return {
        type: 'GET_MY_BOOKS',
        data
    }
}

export function getUsers(data) {
    return {
        type: 'GET_USERS',
        data
    }
}

export function addBook(bookName, category, quantity) {
    const book = {
        bookName,
        category,
        quantity
    }
    return {
        type: 'ADD_BOOK',
        book
    }
}

export function reserveBook(book) {
    return {
        type: 'RESERVE_BOOK',
        book
    }
}

export function searchBookName(text, books) {
    return {
        type: 'SEARCH_BOOK_NAME',
        text,
        books
    }
}

export function searchCategory(text, books) {
    return {
        type: 'SEARCH_BOOK_CATEGORY',
        text,
        books
    }
}

export function returnBook(book) {
    return {
        type: 'RETURN_BOOK',
        book
    }
}