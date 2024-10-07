import { createContext, useState } from "react";

export const RecipeContext = createContext();

export default function RecipeProvider({ children }) {
    // state to store searched text
    const [searchTxt, setSearchTxt] = useState("")
    
    // state to store area text
    const [areaTxt, setAreaTxt] = useState("")

    // state array to store favorites
    const [fav, setFav] = useState([])

    // function to add to fav
    function addToFav(recipe){
        if (!fav.find((f) => f.idMeal === recipe.idMeal)) {
            setFav([...fav, recipe]); // keep favorites as is and add new ones
        }
    };

    //remove recipe from fav
    function removeFromFav(recipe){
        const arrWithoutClickedRecipe = fav.filter((f)=> {return f.idMeal !== recipe.idMeal})
        setFav(arrWithoutClickedRecipe)
    }

    return (
        <RecipeContext.Provider value={{ searchTxt, setSearchTxt, areaTxt, setAreaTxt,  fav, addToFav , removeFromFav }}>{children}</RecipeContext.Provider>
    )
}