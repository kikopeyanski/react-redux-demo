import {VisibilityFilters, ADD_ITEM, TOGGLE_ITEM, SET_VISIBILITY_FILTER, SET_STOCK_ONLY} from  '../actions/actions';
import {combineReducers} from 'redux'

function items(state = [], action) {
    switch (action.type) {
        case ADD_ITEM: {
            return [...state,
                {
                    id: state.length + 1,
                    category: action.item.category,
                    price: action.item.price,
                    stocked: false,
                    name: action.item.name
                }]
        }
            break;
        case TOGGLE_ITEM: {
            return state.map((item, index) => {
                if (index + 1 === action.id) {
                    return Object.assign({}, item, {
                        stocked: !item.stocked
                    })
                }

                return item;
            })
        }
        default:
            return state;
    }
}

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER: {
            return action.filter;
        }
        default:
            return state;
    }
}

export const itemApp = combineReducers({
    visibilityFilter,
    items
});

