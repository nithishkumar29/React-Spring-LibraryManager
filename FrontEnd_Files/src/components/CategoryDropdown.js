import React, {Component} from 'react'

class CategoryDropdown extends Component {
    
    render() {
    return <option value={this.props.category}>{this.props.category}</option>
    }
}

export default CategoryDropdown