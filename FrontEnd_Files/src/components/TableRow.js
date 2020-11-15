import React, {Component} from 'react'

class TableRow extends Component {
    constructor() {
        super()
        this.onClickHandler = this.onClickHandler.bind(this)
    }

    onClickHandler() {
        this.props.reserveBook(this.props.data)
    }

    render() {
        if(this.props.data.quantity > 0) {
            return(
                <div>
                    <tr>
                        <td>{this.props.data.name}</td>
                        <td>{this.props.data.category}</td>
                        <td>{this.props.data.quantity}</td>
                        <td><button onClick={this.onClickHandler}>Reserve</button></td>
                    </tr>
                </div>
            )
        } else {
            return(
                <div>
                    <tr>
                        <td>{this.props.data.name}</td>
                        <td>{this.props.data.category}</td>
                        <td>{this.props.data.quantity}</td>
                        <td><button onClick={this.onClickHandler} disabled>Reserve</button></td>
                    </tr>
                </div>
            )
        }
    }
}

export default TableRow