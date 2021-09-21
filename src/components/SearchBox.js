import React, {Fragment} from 'react'

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <Fragment>
        <div className="pa2">
            <input 
                className="searchBox tc pa3 ba black b--blue br-pill" 
                type="search"  
                placeholder="search Pokemon!"
                onChange={searchChange}
            />
        </div>
        </Fragment>
    )
}

export default SearchBox