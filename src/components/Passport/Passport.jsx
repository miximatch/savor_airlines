import { usePassport } from "../../context/PassportContext";

export default function Passport() {
  const { countries } = usePassport();

  return (
    <div className="passport">
      <h2>🛂 Passport</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.code}>
            {country.unlocked ? "✅" : "🔒"} {country.name}
            {country.unlocked && ` — Stamps: ${country.stamps}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
