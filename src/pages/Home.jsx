import React from 'react'

// component
import MealCard from '../components/MealCard'


import axios from 'axios'

import { useContext, useEffect , useState } from 'react'
import { RecipeContext } from '../context/context'

const Home = () => {

    // searched text from Navbar available due to context --- favorites taken as well with addToFav fnction
    const { searchTxt, setSearchTxt , fav , addToFav , areaTxt} = useContext(RecipeContext)

    // state array to store api results
    const [recipes, setRecipes] = useState([])

    // get api results only when searchedtext state changes
    useEffect(() => {
        async function getData() {
            // if text entered length > 1 exists -- do search query by specific dish name
            if(searchTxt.length>1){
                try {
                    // ◘◘ must have https in front of url of axios 
                    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTxt}`)
                    // console.log(response.data)  // returns array of meals
                    setRecipes(response.data)
                    // console.log(recipes)
                } catch (err) {
                    console.log(err);
                }
            }
            else if(searchTxt.length == 1){
                try {
                    // must have https in front of url of axios
                    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchTxt}`)
                    // console.log(response.data)  // returns array of meals
                    setRecipes(response.data)
                } catch (err) {
                    console.log(err);
                }
            }
            // when nothing entered -- show 1 random recipe
            else{
                try {
                    // must have https in front of url of axios
                    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
                    // console.log(response.data)  // returns array of meals
                    setRecipes(response.data)
                } catch (err) {
                    console.log(err);
                }
                
            }
        }

        getData()
    }, [searchTxt])

    // get this api results only when areaTxt changes
    useEffect(() => {
        async function getData() {
            // if text entered length > 1 exists -- do search query by specific dish name
            if(areaTxt.length>3){
                try {
                    // ◘◘ must have https in front of url of axios 
                    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaTxt}`)
                    // console.log(response.data)  // returns array of meals
                    setRecipes(response.data)
                    // console.log(recipes)
                } catch (err) {
                    console.log(err);
                }
            }
        }

        getData()
    }, [areaTxt])
    

    return (
        <div className='mealList'>
            {/* if  recipes array is not empty, display search results */}
            {
                recipes.meals 
                ?
                recipes.meals.map((meal, index) => {
                    return(
                        <MealCard key={meal.idMeal} meal={meal} addToFav={addToFav}/>
                    )
                })
                :
                "Fetching recipes"
            }
        </div>
    )
}

export default Home
