import React, {Fragment} from 'react'

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <Fragment>
        <div className="pa2">
            <input 
                className="tc pa3 ba black bg-transparent b--blue br-pill" 
                type="search"  
                placeholder="search Pokemon!"
                onChange={searchChange}
            />
        </div>
        </Fragment>
    )
}

export default SearchBox