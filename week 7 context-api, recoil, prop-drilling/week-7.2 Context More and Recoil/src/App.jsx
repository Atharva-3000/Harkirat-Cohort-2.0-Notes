/* eslint-disable react/prop-types */
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
import { useMemo } from "react";
const App = () => {
  return (
    <div>
      {/* anything that uses the recoil logic needs to be wrapped inside RecoilRoot */}
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
};
function Count() {
  console.log("re-render");
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}
function CountRenderer() {
  // since no updation is value is neede here we will use
  // since we only need the value, we will
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count}</b>
      <EvenCountRenderer />
    </div>
  );
}
function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);
  return(
    <div>
      {isEven ? "It is even":"It is odd"}
    </div>
  )


}
function Buttons() {
  // since we also need to update the value, we will use
  // useRecoilState
  // const [count, setCount] = useRecoilState(countAtom);
  // making it more performant
  const setCount = useSetRecoilState(countAtom);
  console.log("button re-render");
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
    </div>
  );
}
export default App;
