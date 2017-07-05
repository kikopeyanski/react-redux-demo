export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const ADD_ITEM = 'ADD_ITEM';
export const SET_STOCK_ONLY = 'SET_STOCK_ONLY';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_STOCKED: 'SHOW_STOCKED'
};

export function addItem(item) {
    return {type: ADD_ITEM, item};
}

export function toggleItem(id) {
    return {type: TOGGLE_ITEM, id}
}
export function setVisibilityFilter(filter) {
    return {type: SET_VISIBILITY_FILTER, filter}
}
export function setStockOnly(checked) {
    return {type: SET_VISIBILITY_FILTER, filter: checked ? VisibilityFilters.SHOW_STOCKED : VisibilityFilters.SHOW_ALL}
}