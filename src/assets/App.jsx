import { textChangeRangeIsUnchanged } from "typescript";
import Header from "./Header.jsx";
import "./App.css";
export default function App() {
  let text = document.getElementById("nome");
  if (text) {
    console.log(text.value);
  }

  // console.log(text.value);
  return <Header nome="Kauan" />;
}
