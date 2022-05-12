import "./styles.css";
import { useEffect, useState, useContext } from "react";
import { context } from "./App";

export default function Child() {
  const { value } = useContext(context);
  const [style, setStyle] = value;

  return (
    <div className="App">
      <br />
      <button onClick={() => setStyle(!style)}>CHANGE THEME</button>
    </div>
  );
}
