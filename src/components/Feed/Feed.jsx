import { recipes } from "../../data/recipes";
import { usePassport } from "../../context/PassportContext";
import RecipeCard from "../Recipe/RecipeCard";

export default function Feed() {
  const { unlockedCountries } = usePassport();
  console.log(unlockedCountries);


  const unlockedRecipes = recipes.filter(recipe =>
    unlockedCountries.includes(recipe.country)
  );

  const lockedRecipes = recipes.filter(
    recipe => !unlockedCountries.includes(recipe.country)
  );

  return (
    <section>
      <h2>Global Feed</h2>

      {unlockedRecipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          locked={false}
        />
      ))}

      {lockedRecipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          locked={true}
        />
      ))}
    </section>
  );
}
