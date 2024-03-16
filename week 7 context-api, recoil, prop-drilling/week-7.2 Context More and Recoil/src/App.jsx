/* eslint-disable react/prop-types */
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";
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
  return <div>{count}</div>;
}

function Buttons() {
  // since we also need to update the value, we will use
  // useRecoilState
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
export default App;
