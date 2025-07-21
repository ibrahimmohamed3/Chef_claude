import '../App.css'
import { useState } from 'react'

function Main(){
     const [ingredients, setIngredients] = useState([])  // creates new state

     const mapedIngredient = ingredients.map(element=>(
          <li key={element}>{element}</li>               
     )        
     )
     function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prev=> [...prev, newIngredient ])
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
                <button type='submit'>Add Ingredient</button>
            </form>
            <ul>
                <li>{mapedIngredient}</li>
            </ul>
        </main>
    )
}

export default Main