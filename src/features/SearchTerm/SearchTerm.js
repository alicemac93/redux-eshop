import React from 'react'
import { setSearchTerm, clearSearchTerm, selectSearchTerm } from '../SearchTerm/SearchTermSlice';
import { useSelector, useDispatch } from 'react-redux';

function SearchBar() {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

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
