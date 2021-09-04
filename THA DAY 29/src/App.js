import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./components/form";
import Card from "./components/Weathercard";
import ToggleTheme from "./components/Toggletheme";
import { useSelector } from "react-redux";

export default function App() {
  const theme = useSelector(state => state.theme);
  return (
    <div className={theme ? "App dark" : "App"}>
      <ToggleTheme />
      <Form />
      <Card />
    </div>
  );
}