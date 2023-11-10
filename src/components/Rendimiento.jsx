import { useEffect, useState, useCallback } from "react";

const Counter = ({ counter, increment }) => {
  useEffect(() => {
    console.log("El increment se redefinió");
  }, [increment]);

  return (
    <div>
      <button onClick={increment}>{counter}</button>
    </div>
  );
};

const Rendimiento = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  return <Counter counter={counter} increment={increment} />;
};
export default Rendimiento;
