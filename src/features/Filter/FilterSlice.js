const initialState = '';

export const FilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'filter/setFilter':
            return action.payload

        default:
            return state;
    }

}

export const setFilter = (filter) => {
    return {
        type: 'filter/setFilter',
        payload: filter
    }
}


export const selectFiltered = state => state.filter;