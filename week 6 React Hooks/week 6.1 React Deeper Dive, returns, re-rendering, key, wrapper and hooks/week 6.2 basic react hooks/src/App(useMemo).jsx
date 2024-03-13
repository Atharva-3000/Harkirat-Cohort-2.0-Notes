import { useMemo, useState } from "react";

const App2 = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    let countFinal = 0;
    for (let i = 1; i <= inputValue; i++) {
      countFinal = countFinal + i;
    }
    return countFinal;
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
        placeholder={"Sum from 1 to N"}
      />
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button
        onClick={function () {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
};
export default App2;
