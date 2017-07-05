import React, {Component} from 'react';
import {PropTypes} from 'prop-types';


class ProductRow extends React.Component {
    onProductClick = () => {
        this.props.onProductClick(this.props.product.id)
    };

    render() {
        let style = this.props.product.stocked ? {color: 'black'} : {color: 'red'};
        return (
            <tr>
                <td style={style} onClick={this.onProductClick}>
                    {this.props.product.name}
                </td>
                <td>
                    {this.props.product.price} $
                </td>
            </tr>

        )
    }
}
ProductRow.propTypes = {
    product: PropTypes.object.isRequired,
    onProductClick: PropTypes.func.isRequired
};



export default ProductRow;