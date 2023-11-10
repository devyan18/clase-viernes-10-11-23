import { useRef } from "react";

const Focus = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.value = "hola mundo";
  };

  return (
    <div>
      <input ref={inputRef} type="text" name="" id="" />

      <button onClick={handleClick}>focus</button>
    </div>
  );
};
export default Focus;
