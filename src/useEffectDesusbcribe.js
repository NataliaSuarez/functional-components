import { useState, useEffect } from "react";

/// USE EFFECT - DESUSCRIBIRSE

const useContador = (initial) => {
  const [contador, setContador] = useState(initial);
  const incrementar = () => setContador(contador + 1);
  return [contador, incrementar];
};

const Interval = ({ contador }) => {
  useEffect(() => {
    const i = setInterval(() => console.log(contador), 1000);
    return () => clearInterval(i);
  }, [contador]);

  return <p>Intervalo</p>;
};

const App = () => {
  const [contador, incrementar] = useContador(0);

  useEffect(() => {
    document.title = contador;
  }, [contador]);

  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
      <Interval contador={contador} />
    </div>
  );
};

export default App;
