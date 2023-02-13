import React from 'react';

const SearchBox = ({searchField, searchChange}) =>{
    return (
        <input
            className='pa3 ba b--green bg-lightest-blue' 
            type='search robots' 
            placeholder='Search'
            onChange={searchChange}/>
    )
}

export default SearchBox;