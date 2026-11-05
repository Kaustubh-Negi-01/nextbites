import type { Recipe } from "../data/recipes";
import Link from "next/link";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link className="recipe-card" href={`/recipe/${recipe.id}`}>
      <p className="recipe-meta">
        <span>{recipe.cuisine}</span>
        <span>{recipe.minutes} min</span>
      </p>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </Link>
  );
}
