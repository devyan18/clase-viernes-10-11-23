import { useRef, useState } from "react";

const Timer = () => {
  const [counter, setCounter] = useState(0);

  const timer = useRef(0);

  const handleStartTimer = () => {
    timer.current = setInterval(() => {
      setCounter((prev) => prev + 1); // se esta aumentado en 1 el contador
    }, 200);
  };

  const handleClick = () => {
    clearInterval(timer.current); // se esta limpiando el intervalo
  };

  const handleReset = () => {
    clearInterval(timer.current);
    setCounter(0);
    timer.current = 0;
  };

  return (
    <div>
      <p>Timer: {counter}</p>
      <button onClick={handleStartTimer}>Iniciar timer</button>
      <button onClick={handleClick}>Parar timer</button>
      <button onClick={handleReset}>Resetear timer</button>
    </div>
  );
};
export default Timer;
