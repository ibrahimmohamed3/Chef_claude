import "../App.css";
import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "./ai";

function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");

  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
  }

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  return (
    <main>
      <form action={handleSubmit} className="add-ingredient-form">
        <input type="text" placeholder="Ingredient" name="ingredient" />
        <button type="submit">Add Ingredient</button>
      </form>
      {ingredients.length >= 1 ? (
        <IngredientsList getRecipe={getRecipe} ingredients={ingredients} />
      ) : null}

      {recipe ? <ClaudeRecipe recipe={recipe} /> : null}
    </main>
  );
}

export default Main;
