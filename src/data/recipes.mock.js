// This file simulates what a real recipe API response might look like.
// Later, we will replace this with real API data.

export const recipes = [
  {
    id: "spaghetti-carbonara",
    title: "Spaghetti Carbonara",
    country: "Italy",
    timeMinutes: 30,
    spicyLevel: 0, // 0 = not spicy, 5 = very spicy
    dietary: ["vegetarian-option"],
    allergens: ["eggs", "dairy", "gluten"],
    image:
      "https://images.unsplash.com/photo-1589308078056-f68f6c15d5c1",
  },
  {
    id: "sushi-rolls",
    title: "Sushi Rolls",
    country: "Japan",
    timeMinutes: 50,
    spicyLevel: 1,
    dietary: ["pescatarian"],
    allergens: ["fish", "soy"],
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  },
  {
    id: "tacos-al-pastor",
    title: "Tacos al Pastor",
    country: "Mexico",
    timeMinutes: 25,
    spicyLevel: 4,
    dietary: [],
    allergens: ["gluten"],
    image:
      "https://images.unsplash.com/photo-1601924582975-7e1b9fcd5b9b",
  },
];
