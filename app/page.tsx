import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main className="shell">
      <div className="intro">
        <h1>What’s for<br /> dinner?</h1>
        <p>Four weeknight favorites, from lemon ricotta pasta to smoky black bean tacos. All ready in 35 minutes or less.</p>
      </div>
      <ul id="recipes" className="recipe-grid" aria-label="Weeknight recipes">
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </li>
        ))}
      </ul>
    </main>
  );
}
