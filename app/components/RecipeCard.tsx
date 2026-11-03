import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="recipe-card">
      <p className="recipe-meta">
        <span>{recipe.cuisine}</span>
        <span>{recipe.minutes} min</span>
      </p>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </article>
  );
}
