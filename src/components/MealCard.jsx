import React from 'react'

const MealCard = ({ meal  , addToFav }) => {
    return (
        <div className='mealCard'>
            {/* based on json returned by api */}
            <h3>{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} className='mealImage'/>
            <button onClick={()=>{addToFav(meal)}}>Add to Favorites</button>
        </div>
    )
}

export default MealCard
