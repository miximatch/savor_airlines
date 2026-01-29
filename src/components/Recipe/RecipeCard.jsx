export default function RecipeCard({ recipe, locked }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "16px",
        opacity: locked ? 0.6 : 1,
      }}
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{
          width: "100%",
          height: "240px",
          objectFit: "cover",
          borderRadius: "8px",
          filter: locked ? "blur(6px)" : "none",
        }}
      />

      <h3>{recipe.title}</h3>

      <p>
        {locked ? "🔒 Locked Country" : recipe.country}
      </p>

      <p>⏱ {recipe.time} min</p>

      {locked && (
        <button disabled>
          ✈️ Unlock via Trivia
        </button>
      )}
    </div>
  );
}
