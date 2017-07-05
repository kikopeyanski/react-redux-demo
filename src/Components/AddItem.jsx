import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {addItem} from '../actions/actions'


class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            category: ''
        }
    }

    handleInputChange = (e) => {
        this.setState(Object.assign({}, this.state, {
            [e.target.name]: e.target.value
        }))
    };

    handleSubmit = () => {
        let item = Object.assign({}, this.state);
        this.props.dispatch(addItem(item))
    };

    render() {
        return (
            <div className="wrapper">
                <input placeholder="Product name" name="name" type="text" value={this.state.val} onChange={this.handleInputChange}/>
                <input placeholder="Price" name="price" type="text" value={this.state.val} onChange={this.handleInputChange}/>
                <input placeholder="Category" name="category" type="text" value={this.state.val} onChange={this.handleInputChange}/>
                <button onClick={this.handleSubmit}>Add</button>
            </div>
        )
    }
}

AddItem = connect()(AddItem);
export default AddItem;