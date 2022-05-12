import "./styles.css";
import { useEffect, useState, createContext } from "react";
import Child from "./Child";
const styles = {
  black: {
    backgroundColor: "black",
    color: "white"
  },
  white: {
    backgroundColor: "white",
    color: "black"
  }
};
export let context = createContext();
export default function App() {
  const [style, setStyle] = useState(true);

  let selectStyle = style ? styles.black : styles.white;
  console.log(selectStyle);
  return (
    <div className="App">
      <div className="" border="1" style={selectStyle}>
        Hello
      </div>
      <context.Provider value={{ value: [style, setStyle] }}>
        <Child />
      </context.Provider>
    </div>
  );
}
