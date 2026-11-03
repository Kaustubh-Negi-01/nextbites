export type Recipe = {
  id: string;
  title: string;
  cuisine: string;
  minutes: number;
  description: string;
};

export const recipes: Recipe[] = [
  {
    id: "lemon-ricotta-pasta",
    title: "Lemon ricotta pasta",
    cuisine: "Italian",
    minutes: 20,
    description: "Silky ricotta, lemon zest and black pepper tossed through warm rigatoni.",
  },
  {
    id: "miso-salmon",
    title: "Miso-glazed salmon",
    cuisine: "Japanese-inspired",
    minutes: 25,
    description: "Caramelized miso salmon with steamed rice and crisp smashed cucumbers.",
  },
  {
    id: "black-bean-tacos",
    title: "Smoky black bean tacos",
    cuisine: "Mexican-inspired",
    minutes: 30,
    description: "Chipotle-spiced beans, lime slaw and avocado tucked into warm corn tortillas.",
  },
  {
    id: "tomato-chickpea-skillet",
    title: "Tomato chickpea skillet",
    cuisine: "Mediterranean-inspired",
    minutes: 35,
    description: "Chickpeas simmered with cherry tomatoes and garlic, finished with feta and dill.",
  },
];
