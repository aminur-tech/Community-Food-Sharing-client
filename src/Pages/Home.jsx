import React from 'react';
import HeroSection from '../Component/HeroSection';
import { useLoaderData } from 'react-router';
import FoodCard from '../Component/FoodCard';

const Home = () => {
    const foods = useLoaderData()
    // console.log(foods)
    return (
        <div>
            {/* hero section */}
            <div>
                <HeroSection></HeroSection>
            </div>
             {/* featured-foods */}
             <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mb-10'>
                {
                    foods.map(food => <FoodCard food={food} key={food._id}></FoodCard>)
                }

             </div>
        </div>
    );
};

export default Home;