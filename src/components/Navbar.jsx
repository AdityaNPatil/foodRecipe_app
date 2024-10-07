import React from 'react'

// Link
import { Link, useNavigate } from 'react-router-dom'

// useForm 
import { useForm } from "react-hook-form"

// useContext
import { useContext } from 'react'
import { RecipeContext } from '../context/context'

const Navbar = () => {
    // useForm
    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm()

    // useContext to get searchTerm state from context
    const { searchTxt, setSearchTxt, setAreaTxt } = useContext(RecipeContext)

    // redirection or navigation
    const navig = new useNavigate()

    // function to handle submit
    function onSubmit(data) {
        // console.log(data.searchTerm)
        setSearchTxt(data.searchTerm)
        navig("/")
    }

    // function to handle submit if area entered
    function onAreaSubmit(data) {
        // console.log(data.searchTerm)
        setAreaTxt(data.areaTerm)
        navig("/")
    }

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
            
            {/* For name */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Search for meals"
                    {...register('searchTerm')}
                />
                <button type="submit">Search</button>
            </form>

            {/* For area */}
            <form onSubmit={handleSubmit(onAreaSubmit)}>
                <input
                    type="text"
                    placeholder="Search By Area"
                    {...register('areaTerm')}
                />
                <button type="submit">Search</button>
            </form>
        </nav>
    )
}

export default Navbar
