import React, { useState } from 'react';
import Results from './results';
import styled from 'styled-components';

const SearchBar = ({ items, onItemSelected}) => { // onItem is a method
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);


//     //styles 
//     const SearchBarContainer = styled.div `
//         position: relative;
//         width: 400px;
//         margin: 0 auto;
//     `;

//     const StyleInput = styled.input `
//     padding: 10px;
//     border-radius: 5px;
//     min-width: 400px;
//     box-sizing: border-box;
//     border: solid 1px #222;
//     outline: none;
// `;

    function handleChange(e){
        const value = e.target.value;
        setQuery(value);
    }; 

    function handleResults(items){
        setResults(items);
    };

    function handleItemSelected() {};
    
    return (
        <div>
        { results && <div> {results.length} Results </div>}
            <input type="text" onChange={handleChange} value={query}/>
            <Results items={items} 
            onItemSelected={handleItemSelected} 
            query={query} 
            onResultsCalculated={handleResults}/>
        </div>
    );
}

export default SearchBar;
