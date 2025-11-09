import React from 'react';
import { useLoaderData } from 'react-router';

const AvailableFoods = () => {
    const foods = useLoaderData()
    console.log(foods)
    return (
        <div>
            
        </div>
    );
};

export default AvailableFoods;