import React from 'react';


const Searchbox = ({ SearchChange }) => {
    return (
        <>
            <input
                className="pa3 ma4 ba b--green bg-lightest-blue"
                type="search"
                placeholder="Search Robots"
                onChange={SearchChange}
            ></input>
        </>
    )
}


export default Searchbox;