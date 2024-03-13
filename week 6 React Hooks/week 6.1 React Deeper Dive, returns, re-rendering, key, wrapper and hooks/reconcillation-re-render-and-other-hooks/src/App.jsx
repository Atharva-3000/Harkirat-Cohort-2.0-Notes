// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);
//   console.log("App render");
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Count is {count}
//       </button>
//     </div>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";

// const App = () => {
//   // side-effects
//   const [exchangeData, setExchangeData] = useState({});
//   const [bankData, setBankData] = useState({});
// hi there, re-rendering thi
// fetch("https://google.com", async (res)=>{
//   const json=await res.json()
//   setBankData(json)
// });
//   useEffect(function () {
//     setTimeout(() => {
//       setBankData({ income: 100 });
//     }, 3000);
//   },[]);

//   useEffect(function () {
//     setTimeout(() => {
//       setExchangeData({ returns: 100 });
//     }, 1000);
//   },[]);

//   const incomeTax = (bankData.income + exchangeData.returns) * 0.3;
//   return <div>HI there, your income tax returns are {incomeTax}</div>;
// };

// export default App;

// import { useEffect, useMemo, useState } from "react";

// function App() {
//   const [exchange1Data, setExchange1Data] = useState({});
//   const [exchange2Data, setExchange2Data] = useState({});
//   const [bankData, setBankData] = useState({});

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange1Data({
//       returns: 100,
//     });
//   }, []);

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange2Data({
//       returns: 100,
//     });
//   }, []);

//   useEffect(() => {
//     // Some operation to get the data
//     setTimeout(() => {
//       setBankData({
//         income: 100,
//       });
//     },5000);
//   }, []);

//   const cryptoReturns = useMemo(()=>{
//     console.log('calculating crypto returns before')
//     return exchange1Data.returns + exchange2Data.returns;
//   },[exchange1Data, exchange2Data]) 

//   const incomeTax = (cryptoReturns + bankData.income) * 0.3;

//   return <div>hi there, your income tax returns are {incomeTax}</div>;
// }

// export default App;

import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = "10"
    }, 5000);
  }, [])

  const incomeTax = 20000;

  return (
    <div>
        hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

export default App