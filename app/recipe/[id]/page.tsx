import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";

export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: recipe.id }));
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="shell recipe-detail">
      <Link href="/#recipes">Back to recipes</Link>
      <header className="recipe-heading">
        <p className="recipe-meta">
          <span>{recipe.cuisine}</span>
          <span>{recipe.minutes} min</span>
        </p>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
      </header>
      <div className="recipe-instructions">
        <section aria-labelledby="ingredients-heading">
          <h2 id="ingredients-heading">Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="steps-heading">
          <h2 id="steps-heading">Method</h2>
          <ol>
            {recipe.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
