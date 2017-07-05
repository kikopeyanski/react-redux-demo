import React, {Component} from 'react';
import ProductRow from "./ProductRow";


class ProductCategoryRow extends Component {
    render() {
        return (<tbody className="category">
        <tr >
            <th colSpan="2">{this.props.category}</th>
        </tr>
        {this.props.items.map(item => <ProductRow key={item.name} product={item}
                                                  onProductClick={this.props.onProductClick}/>)}
        </tbody>)
    }
}

export default ProductCategoryRow;