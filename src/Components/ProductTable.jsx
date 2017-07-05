import React, {Component} from 'react';
import ProductCategoryRow from "./ProductCategoryRow";
import {PropTypes} from 'prop-types';
import SearchBar from "./Search";
import AddItem from "./AddItem";


export class ProductTable extends Component {
    handleCheckbox = (checked) => {
        this.props.handleCheckbox(checked);
    };
    handleChange = (value) => {
        this.props.onVisibility(value);
    };

    render() {
        console.log(this.props.items);
        let rows = [];
        let lastCategory;
        this.props.items.forEach((product) => {
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow
                    items={this.props.items.filter(item => item.category === product.category)}
                    key={product.category}
                    category={product.category}
                    onProductClick={this.props.onProductClick}/>)
            }

            lastCategory = product.category;
        });


        return (
            <div className="product-table">
                <SearchBar handleInputChange={this.handleChange} handleCheckbox={this.handleCheckbox}/>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    {rows}
                </table>
                <AddItem/>
            </div>
        )
    }
}
ProductTable.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            stocked: PropTypes.bool.isRequired,
        }).isRequired
    ).isRequired,
    onProductClick: PropTypes.func.isRequired
};

