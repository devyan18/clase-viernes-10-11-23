import { useState, useEffect } from "react";

const MyComponent = () => {
  // cuando se crea el componente.
  const [live, setLive] = useState("se monta");

  useEffect(() => {
    // cuando se actualiza el componente.
    setLive("se actualiza");

    // cuando se desmonta el componente.
    return () => {
      setLive("se desmonta");
    };
  }, []);

  return <div>{live}</div>;
};
export default MyComponent;
