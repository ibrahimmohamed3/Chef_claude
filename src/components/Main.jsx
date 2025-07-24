import '../App.css'
import { useState } from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'

function Main(){

    /**
     * Challenge: clean up our code!
     * Let's make a couple new components to make things a
     * little cleaner. (Notice: I'm not suggesting what we
     * have now is bad or wrong. I'm mostly finding an excuse
     * to get in some hands-on practice 🙂)
     * 
     * 1. Move the entire recipe <section> into its own
     *    ClaudeRecipe component
     * 2. Move the list of ingredients <section> into its
     *    own IngredientsList component.
     * 
     * While you're considering how to structure things, consider
     * where state is, think about if it makes sense or not to
     * move it somewhere else, how you'll communicate between
     * the parent/child components, etc.
     * 
     * The app should function as it currently does when you're
     * done, so there will likely be some extra work to be done
     * beyond what I've listed above.
     */

     const [ingredients, setIngredients] = useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
     ) 
     const [recipeShown, setRecipeShown] = useState(false) 
      

     
    

     function handleSubmit(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(prev=> [...prev, newIngredient ])
     }

     function getRecipe(){
        setRecipeShown(prevShown=>!prevShown)
     }
    
    return(
        <main>
            <form
                action={handleSubmit}
                className="add-ingredient-form">

                <input type="text" 
                placeholder="Ingredient"
                name='ingredient'
                
                />
                <button type='submit'>Add Ingredient</button>
            </form>
          { ingredients.length >= 1 ?
          <IngredientsList 
          recipe = {getRecipe}
          ingredients = {ingredients}/> :null }

        {recipeShown ? 
        <ClaudeRecipe />
        : null}

        </main>
    )
}

export default Main