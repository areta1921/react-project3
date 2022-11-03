import { useState } from "react";
import Input from "./Onchange";
import "./App.css";
import UseEffect from "./UseEffect";

function App() {
  const [counter, setCounter] = useState(0);
  const [dec, setDec] = useState(10);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setDec(dec - 1);
  };
  return (
    <div className="App">
      <Input /> <br />
      <UseEffect/>  <br />
      <button onClick={increment}>increment</button>
      <h1> {counter}</h1>
      <h1> {dec}</h1>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
