import React from 'react'

// use context to take array of favorites
import { useContext } from 'react';
import { RecipeContext } from '../context/context';

const Favorites = () => {
    // get favorites recipe state array from context
    const { fav, removeFromFav } = useContext(RecipeContext);

    return (
        <div className='favoritesPage'>
            <h1>Favorites Page</h1>
            <div className="mealList">
                {fav.map((meal) => (
                    <div key={meal.idMeal} className='FavmealCard'>
                        <div className="mealMain">
                            <h3>{meal.strMeal}</h3>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                        </div>
                        <div className="mealInfo">
                            <h3>Cuisine - {meal.strArea}</h3>
                            <h4>Instructions</h4>
                            <p>{meal.strInstructions.replace("/\./g", '\n')}</p>
                            <button onClick={() => { removeFromFav(meal) }}>Remove</button>
                            <a href={meal.strYoutube} target='_blank'>Watch detailed video here 🔗</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Favorites
