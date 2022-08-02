import React, { useMemo } from 'react';

const MarketItem = ({ item, query, onClick }) => {

    const { left, center, right } = useMemo(
        () => getPositions(item, query), 
        [item, query]
    ); 

    function getPositions(item, query){
        const index = item.title.toLowerCase().indexOf(query); // to know position in my text and coincidencia
        // slice . divide in tree parts
        const left = item.title.slice(0, index);
        const right = item.title.slice(index + query.lenght); 
        const center = item.title.slice(index, index + query.lenght);

        return {
        left, 
        center, 
        right
        };
    }; 

    return (
        <div>
            <button>
                {left} 
                <span style={{fontWeight: 'bolder', backgroundColor: 'yellow'}}> {center} </span>
                {right}
            </button>
        </div>
    );
}

export default MarketItem;
