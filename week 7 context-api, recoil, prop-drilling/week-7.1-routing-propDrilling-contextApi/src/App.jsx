/* eslint-disable react/prop-types */
// import { useState } from "react"

// // PROP DRILLING is the process of passing data from one component to another by going through other components. This can be a problem when the data needs to be passed through many levels of components. This can be solved by using the Context API or Redux for state management. That is no drilling but just teleport  the data to the required component.

// WITHOUT PROP DRILLING
// const App = () => {
//     const [count, setCount] = useState(0);
//   return(
//     <div>
//         <Count count={count} setCount={setCount}/>
//     </div>
//   )
// }
// function Count({count, setCount}){
//     return <div>
//     <CountRenderer count={count}/>
//     <Buttons count={count} setCount={setCount}/>
//     </div>
// }

// function CountRenderer({count}){
//     return <h1>{count}</h1>
// }

// function Buttons({count, setCount}){
//     return <div>
//         <button onClick={()=>setCount(count+1)}>Increment</button>
//         <button onClick={()=>setCount(count-1)}>Decrement</button>
//     </div>
// }
// export default App

// WITH PROP DRILLING
import { useContext, useState } from "react";
import { countContext } from "./context";
// PROP DRILLING is the process of passing data from one component to another by going through other components. This can be a problem when the data needs to be passed through many levels of components. This can be solved by using the Context API or Redux for state management. That is no drilling but just teleport  the data to the required component.

const App = () => {
  // create a file that will help you teleport the data to the required component
  const [count, setCount] = useState(0);
  // wrap anyone that wants to use the teleported value inside the provider
  return (
    <div>
      <countContext.Provider value={count}>
        <Count setCount={setCount} />
      </countContext.Provider>
    </div>
  );
};
function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  const count = useContext(countContext);
  return <div>{count}</div>;
}

function Buttons({setCount }) {
  const count = useContext(countContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
export default App;
