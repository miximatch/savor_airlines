function RecipeCard({ recipe }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 12 }}>
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{ width: "100%", borderRadius: 6 }}
      />
      <h3>{recipe.title}</h3>
      <p>{recipe.country}</p>
      <p>⏱ {recipe.timeMinutes} min</p>
    </div>
  );
}

export default RecipeCard;
