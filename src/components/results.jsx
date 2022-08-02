import React, { useState, useMemo, useEffect } from 'react';
import MarketItem from './marketItem';

const Results = ({ items, 
    onItemSelected, 
    query, 
    onResultsCalculated}) => {
        
    const [ results, setResults] = useState([]);

    useEffect(() => {
        onResultsCalculated(results);
    }, [results]);

    const filteredItems = useMemo(() => findMatch(items, query), [items, query]); 

    function findMatch(items, query){
        const res = items.filter( i => {
            return i.title.toLowerCase().indexOf(query) >= 0 && query.length > 0 ;
    }); 

    setResults(res); 
    return res; 
    }; 

    return (
        <div>
            {
                query !== '' ? 
                filteredItems.map((item) => (
                    <MarketItem key={item.id} query={query} item={item} onClick={onItemSelected}/> )) 
                    : ''
            }
        </div>
    );

}

export default Results;
