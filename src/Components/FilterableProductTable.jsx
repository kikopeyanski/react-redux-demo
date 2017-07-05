// import React, {Component} from 'react';
// import items from '../data';
// import SearchBar from "./Search";
// import ProductTable from "./ProductTable";
// import VisibleItems from '../Containers/VisibleItems'
//
// class FilterableProductTable extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             filterText: '',
//             inStockOnly: false,
//             items: items
//         }
//     }
//
//     onInputChange = (target) => {
//         this.setState({
//             [target.name]: target.name
//             === 'inStockOnly' ? target.checked : target.value
//         });
//     };
//     onProductClick = (id) => {
//         this.setState({
//             items: this.state.items.map((item) => {
//                 if (item.id === id) {
//                     return Object.assign({}, item, {stocked: !item.stocked});
//                 }
//                 return item;
//             })
//         });
//     };
//
//     render() {
//         return (
//             <div>
//                 <SearchBar
//                     handleInputChange={this.onInputChange}
//                     filterText={this.state.filterText}
//                     inStockOnly={this.state.inStockOnly}/>
//                 <VisibleItems
//                     data={this.state.items}
//                     onProductClick={this.onProductClick}/>
//             </div>
//         )
//     }
// }
// // filterText={this.state.filterText}
// // inStockOnly={this.state.inStockOnly}
//
// export default FilterableProductTable;