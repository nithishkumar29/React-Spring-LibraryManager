import React, {Component} from 'react'
import CategoryDropdown from './CategoryDropdown'
import DisplayDataTable from './DataTableLibBooks'

class LibraryBooks extends Component {
    constructor() {
        super()
        this.searchBookName = this.searchBookName.bind(this)
        this.searchCategory = this.searchCategory.bind(this)
    }

    searchBookName(event) {
        const bookName = event.target.value
        const books = this.props.books
        this.props.searchBookName(bookName, books)
    }

    searchCategory(event) {
        const category = event.target.value
        const books = this.props.books
        this.props.searchCategory(category, books)
    }
    render() {
        return (
            <div>
                <div className='admin-register-book'>
                    <p>Search:</p>
                <div className="form-register-book">
                    <input type="text" placeholder="Book Title" name="bookName" required onChange={this.searchBookName}/>
                    <input type="text" placeholder="Category Name" name="category" required onChange={this.searchCategory}/>
                </div>
                </div>
                <DisplayDataTable {...this.props} />
            </div>
        )
    }
}

export default LibraryBooks