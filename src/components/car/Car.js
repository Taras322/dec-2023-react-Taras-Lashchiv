import React from 'react';

const Car = ({car, setCarUpdate}) => {
    const {id, brand, price, year} = car;
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>setCarUpdate(car)}>Update</button>
        </div>
    );
};

export default Car;