import React, {Component} from 'react'
import DataTable from 'react-data-table-component'
import ArrowDownward from '@material-ui/icons/ArrowDownward'

class DisplayMyBooks extends Component {
    constructor() {
        super()
        this.returnClicked = this.returnBook.bind(this)
    }

    returnBook(row) {
        this.props.returnBookDB(row, this.props.users[0].id)
    }
    
    render() {
        const data = this.props.mybooks
        const columns = [{
            name: <b>Title</b>,
            selector: 'bookName',
            sortable: true,
        },{
            name: <b>Category</b>,
            selector: 'category',
            sortable: true,
            right: true,
        },{
        cell: row => <div><button onClick={this.returnBook.bind(this, row)}>Return</button></div>,
        selector: 'id'
        }]
        const sortIcon = <ArrowDownward />
        return (
            <div>
                <DataTable
                    title="My Books"
                    columns={columns}
                    data={data}
                    sortIcon={sortIcon}
                    pagination
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5, 10, 15]}
                />
            </div>
        )
    }
}

export default DisplayMyBooks