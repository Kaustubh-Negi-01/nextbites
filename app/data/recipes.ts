export type Recipe = {
  id: string;
  title: string;
  cuisine: string;
  minutes: number;
  description: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "lemon-ricotta-pasta",
    title: "Lemon ricotta pasta",
    cuisine: "Italian",
    minutes: 20,
    description: "Silky ricotta, lemon zest and black pepper tossed through warm rigatoni.",
    ingredients: ["200 g rigatoni", "150 g ricotta", "1 lemon, zested and juiced", "2 tbsp grated Parmesan", "Salt and black pepper"],
    steps: [
      "Cook the rigatoni in salted boiling water according to the packet. Reserve a mug of pasta water before draining.",
      "Mix the ricotta, lemon zest, 1 tbsp lemon juice and Parmesan in a large bowl.",
      "Toss the hot pasta with the ricotta mixture, adding pasta water a splash at a time until silky. Season with salt, pepper and more lemon juice to taste.",
    ],
  },
  {
    id: "miso-salmon",
    title: "Miso-glazed salmon",
    cuisine: "Japanese-inspired",
    minutes: 25,
    description: "Caramelized miso salmon with steamed rice and crisp smashed cucumbers.",
    ingredients: ["2 salmon fillets, about 150 g each", "1 tbsp white miso", "1 tbsp soy sauce", "1 tbsp honey", "150 g white rice", "1 cucumber", "1 tbsp rice vinegar"],
    steps: [
      "Heat the oven to 200°C. Cook the rice according to the packet instructions.",
      "Mix the miso, soy sauce and honey. Spread over the salmon and place on a lined baking tray.",
      "Roast for 12–15 minutes, until the thickest part of the salmon reaches 63°C.",
      "Lightly smash and chop the cucumber, then toss with rice vinegar. Serve with the salmon and rice.",
    ],
  },
  {
    id: "black-bean-tacos",
    title: "Smoky black bean tacos",
    cuisine: "Mexican-inspired",
    minutes: 30,
    description: "Chipotle-spiced beans, lime slaw and avocado tucked into warm corn tortillas.",
    ingredients: ["1 tbsp olive oil", "1 can black beans (400 g), drained", "1 tsp chipotle paste", "150 g shredded cabbage", "1 lime", "1 avocado, sliced", "6 small corn tortillas", "Salt"],
    steps: [
      "Heat the oil in a frying pan. Stir in the beans, chipotle paste and 3 tbsp water. Simmer for 8 minutes, mashing some beans with a spoon.",
      "Toss the cabbage with the juice of half the lime and a pinch of salt.",
      "Warm the tortillas in a dry frying pan for about 30 seconds per side.",
      "Fill the tortillas with beans, slaw and avocado. Serve with the remaining lime cut into wedges.",
    ],
  },
  {
    id: "tomato-chickpea-skillet",
    title: "Tomato chickpea skillet",
    cuisine: "Mediterranean-inspired",
    minutes: 35,
    description: "Chickpeas simmered with cherry tomatoes and garlic, finished with feta and dill.",
    ingredients: ["1 tbsp olive oil", "2 garlic cloves, sliced", "300 g cherry tomatoes, halved", "1 can chickpeas (400 g), drained", "75 g feta, crumbled", "2 tbsp chopped fresh dill", "Salt and black pepper"],
    steps: [
      "Heat the oil in a skillet over medium heat. Add the garlic and cook for 1 minute.",
      "Add the tomatoes and a pinch of salt. Cook for 10 minutes, stirring occasionally, until softened.",
      "Stir in the chickpeas and 100 ml water. Simmer for 10–15 minutes until the sauce thickens.",
      "Season to taste with salt and pepper. Scatter over the feta and dill before serving.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
