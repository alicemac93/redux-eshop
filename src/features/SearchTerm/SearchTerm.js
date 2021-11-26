import React from 'react'
import { setSearchTerm, clearSearchTerm } from '../SearchTerm/SearchTermSlice';

function SearchBar({ searchTerm, dispatch }) {

    const handleSearchHandler = (e) => {
        dispatch(setSearchTerm(e.target.value));
    }

    const clearSearchTermHandler = () => {
        dispatch(clearSearchTerm());
    }

    return (
        <div>
            <input
                onChange={handleSearchHandler}
                value={searchTerm}
            />
            {searchTerm.length > 0 &&
                <button
                    onClick={clearSearchTermHandler}
                >
                    Search
                </button>
            }
        </div>
    )
}

export default SearchBar
