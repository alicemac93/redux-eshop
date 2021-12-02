const initialState = '';

export const SearchTermReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'searchTerm/setSearchTerm':
            return action.payload;
        case 'searchTerm/clearSearchTerm':
            return '';
        default:
            return state
    }
}

export const setSearchTerm = (searchTerm) => {
    return {
        type: 'searchTerm/setSearchTerm',
        payload: searchTerm
    }
}

export const clearSearchTerm = () => {
    return {
        type: 'searchTerm/clearSearchTerm',
    }
}

export const selectSearchTerm = state => state.searchTerm;
