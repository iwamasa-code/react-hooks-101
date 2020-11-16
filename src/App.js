import React, { useEffect, useState } from "react";

const App = () => {
  const initialStates = {
    name: "",
    price: 1000,
  };
  const [name, setName] = useState(initialStates.name);
  const [price, setPrice] = useState(initialStates.price);

  const reset = () => {
    setPrice(initialStates.price);
    setName(initialStates.name);
  };

  useEffect(() => {
    console.log("useEffect");
  });

  useEffect(() => {
    console.log("This is like componentDidMount");
  }, []);

  useEffect(() => {
    console.log("This callback is for name only");
  }, [name]);

  return (
    <>
      <p>
        今の{name}の所持金は、{price}円です。
      </p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </>
  );
};

export default App;

//useEffectはJSXのレンダリングのあとで実行される。
