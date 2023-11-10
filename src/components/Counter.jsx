import { useRef } from "react";

const Counter = () => {
  const counter = useRef(0);

  const handleClick = () => {
    counter.current++;
    console.log(counter.current);
  };

  return (
    <div>
      <button onClick={handleClick}>+</button>
    </div>
  );
};
export default Counter;
