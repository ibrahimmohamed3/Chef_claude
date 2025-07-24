import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props) {
  return (
    
       <section className="suggested-recipe-container">
         <h2>The Chef Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    
  );
}
