import React, {Component} from 'react'
import DataTable from 'react-data-table-component'
import ArrowDownward from '@material-ui/icons/ArrowDownward'

class DisplayDataTable extends Component {
    constructor() {
        super()
        this.reserveClicked = this.reserveClicked.bind(this)
    }
    componentDidMount() {
        this.props.getBooksFromDB()
    }
    reserveClicked(row) {
        this.props.reserveBookDB(row, this.props.users[0].id)
    }
    
    render() {
        const returnButton = (row) => {
            if(row.quantity > 0) {
                return <button onClick={this.reserveClicked.bind(this, row)}>Reserve</button>
            } else {
                return <button onClick={this.reserveClicked.bind(this, row)} disabled>Reserve</button>
            }
        }
        const data = this.props.currentTable
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
            name: <b>Quantity</b>,
            selector: 'quantity',
            sortable: false,
            right: true,
        }, {
        cell: row => <div>{returnButton(row)}</div>,
        selector: 'id'
        }]
        const sortIcon = <ArrowDownward />
        return (
            <div>
                <DataTable
                    title="Library Books"
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

export default DisplayDataTable