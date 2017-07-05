import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

let splitterOptions = {
    orientation: 'horizontal',
    panes: [
        {collapsible: false, size: '300px'},
        {resizable: true}
    ]
};

let treeOptions = {};
let gridOptions = {};

class SearchBar extends Component {
    handleInputChange = ({target}) => {
        this.props.handleInputChange(target.value);
    };
    toggleStockOnly = ({target}) => {
        console.log(target.checked);
        this.props.handleCheckbox(target.checked);
    };

    render() {
        return (
            <div className="search-bar">
                <label htmlFor="">
                    Search
                    <input name="filterText" type="text" value={this.props.searchText}
                           onChange={this.handleInputChange}/>
                </label>
                <label htmlFor="">
                    Stock only
                    <input name="inStockOnly" type="checkbox" value={this.props.inStockOnly}
                           onChange={this.toggleStockOnly}/>
                </label>
            </div>
        )
    }
}

SearchBar.defaultProps = {
    filterText: '',
    inStockOnly: false
};

SearchBar.propTypes = {
    filterText: PropTypes.string.isRequired,
    inStockOnly: PropTypes.bool.isRequired
};

export default SearchBar;