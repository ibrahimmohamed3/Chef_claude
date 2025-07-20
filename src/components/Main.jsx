import '../App.css'
function Main(){
     const ingredients = ["Chicken", "Oregano", "Tomatoes"]

     const mapedIngredient = ingredients.map(element=>(
          <li key={element}>{element}</li>
     )
            
     )

     function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
     }

    return(
        <main>
            <form
                onSubmit={handleSubmit}
                className="add-ingredient-form">
                <input type="text" 
                placeholder="Ingredient"
                name='ingredient'
                
                />
                <button >Add Ingredient</button>
            </form>
            <ul>
                <li>{mapedIngredient}</li>
            </ul>
        </main>
    )
}

export default Main