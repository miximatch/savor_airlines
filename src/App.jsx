import { recipes } from "./data/recipes.mock";
import Feed from "./components/Feed/Feed";
import Passport from "./components/Passport/Passport";

export default function App() {
  return (
    <div className="app">
      <h1>Savor Airlines</h1>
      <Passport />
      <Feed />
    </div>
  );
}
