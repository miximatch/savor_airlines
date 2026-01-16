import { usePassport } from "../../context/PassportContext";
import RecipeCard from "../RecipeCard";
import { recipes } from "../../data/recipes.mock";

export default function Feed() {
  const { lockedCountries, startFlight, completeFlight } = usePassport();

  return (
    <div className="feed">
      <h3>Global Feed</h3>

      {/* Recipe cards */}
      <div style={{ display: "grid", gap: 16 }}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {/* Temporary unlock controls */}
      {lockedCountries.map((country) => (
        <div key={country.code}>
          🔒 {country.name}
          <button onClick={() => startFlight(country.code)}>
            Start Flight
          </button>
          <button onClick={completeFlight}>
            Complete Trivia
          </button>
        </div>
      ))}
    </div>
  );
}
