/* eslint-disable react/prop-types */
// used to memorize functions, which can help to improve performance of the app. Especially useful when passing props to child components.
// referrential equality is used to compare the previous and current value of the function. If the value is the same, the function is not re-created.
// import { useState, memo, useMemo, useCallback } from "react";
// // var a = 1;
// const App = () => {
//   const [counter, setCounter] = useState(0);
// var a = 1;   wont re-render Demo

// function a(){    //will re-render demo
//   console.log("Hi there");
// }

// useCallback to prevent re-render like useMemo
//   const a= useCallback(function(){
//     console.log("Hi there");
//   },[])
//   return (
//     <div>
//       <button
//         onClick={function () {
//           setCounter(counter + 1);
//         }}
//       >
//         Counter ({counter})
//       </button>
//       <Demo a={a} />
//     </div>
//   );
// };
// const Demo = memo(function ({ a }) {
//   console.log("re-render");
//   return;
//   <div>Hello There{a}</div>;
// });

// export default App;

// small assignment

import { memo, useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onClick= useCallback(()=> {
    console.log("child clicked");
  }
  )
  return (
    <div>
      <Child onClick={onClick} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me {count}
      </button>
    </div>
  );
}

const Child = memo(({ onClick }) => {
  console.log("child render");

  return (
    <div>
      <button onClick={onClick}>Button clicked</button>
    </div>
  );
});

export default App;
