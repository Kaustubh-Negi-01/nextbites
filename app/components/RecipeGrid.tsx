"use client";

import { useState } from "react";
import type { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");
  const search = query.trim().toLowerCase();
  const matches = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search) ||
    recipe.cuisine.toLowerCase().includes(search)
  );

  return (
    <section id="recipes" aria-label="Weeknight recipes">
      <div className="recipe-search">
        <label htmlFor="recipe-search">Find your next dinner</label>
        <input
          id="recipe-search"
          type="search"
          placeholder="Search by recipe or cuisine"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-describedby="search-results"
        />
      </div>
      <p id="search-results" className="search-results" role="status">
        {matches.length === 0
          ? "No recipes match your search. Try another dish or cuisine."
          : `${matches.length} ${matches.length === 1 ? "recipe" : "recipes"} to cook`}
      </p>
      {matches.length > 0 && (
        <ul className="recipe-grid">
          {matches.map((recipe) => (
            <li key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
