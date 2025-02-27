import { useState } from "react"

function init() {
  console.log("init is exicute");
  return  Math.random();
}

export default function Counter() {
  // let [stateVariable, setStateVariable] =  useState(0);

  let [Count, setCount] = useState(init);      // initialization  
  console.log("Componets is rendered")      // Clousre in js
  console.log(`Count = ${Count}`)          // re-render


/* Callbaks in set-State functions */
let incCount = () => { 
  setCount((currCount) => {
    return currCount + 1;
  });
  setCount((currCount) => {
    return currCount + 1;
  });


  // setCount(20)
}

  return (
    <>
    <h3>Count = {Count}</h3>
    <button onClick={incCount} >Increase Count</button>
    </>
  )
}
