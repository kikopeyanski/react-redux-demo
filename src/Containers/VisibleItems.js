import React, {Component} from 'react';
import {setStockOnly, setVisibilityFilter, toggleItem} from '../actions/actions'
import {connect} from 'react-redux';
import {ProductTable} from '../Components/ProductTable.jsx'

const getVisibleItems = (items, filter) => {
    switch (filter) {
        case "SHOW_ALL":
            return items;
        case "SHOW_STOCKED":
            return items.filter(item => item.stocked);
        default:
            return items.filter(item => item.name.indexOf(filter) !==-1)
    }
};

const mapStateToProps = state => {
    return {
        items: getVisibleItems(state.items, state.visibilityFilter),
        searchText: state.visibilityFilter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onProductClick: id => {
            dispatch(toggleItem(id));
        },
        onVisibility: filter => {
            dispatch(setVisibilityFilter(filter))
        },
        handleCheckbox: checked => {
            dispatch(setStockOnly(checked));
        }
    }
};

const VisibleItems = connect(mapStateToProps, mapDispatchToProps)(ProductTable);

export default VisibleItems;