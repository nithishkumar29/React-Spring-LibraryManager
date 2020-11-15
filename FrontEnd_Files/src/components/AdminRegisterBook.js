import React, {Component} from 'react'
import CategoryDropdown from './CategoryDropdown'

class AdminRegisterBook extends Component {

    constructor() {
        super()
        this.formSubmit = this.formSubmit.bind(this)
    }

    componentDidMount() {
    }

    formSubmit(event) {
        event.preventDefault()
        const bookName = event.target.elements.bookName.value
        const quantity = event.target.elements.quantity.value
        const category = event.target.elements.category.value

        this.props.addBookToDB(bookName, category, quantity)
    }

    render() {
        return (
            <div className='admin-register-book'>
                <h4>Register Book</h4>
                <form onSubmit={this.formSubmit} className="form-register-book">
                    <input type="text" placeholder="Book Title" name="bookName" required />
                    <select id="category" name="category" className="book-category">
                        { this.props.bookCategories.map( (category, index) => <CategoryDropdown key={index} category={category} />)}
                    </select>
                    <input type="number" placeholder="Quantity" name="quantity" min="1" required />
                    <button type="submit">REGISTER BOOK</button>
                </form>
            </div>
        )
    }
}

export default AdminRegisterBook