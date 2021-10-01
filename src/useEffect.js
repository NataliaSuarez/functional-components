import { useState, useEffect } from "react";

/// USE EFFECT
// cualqueir efecto lateral, como actualizar el DOM, leer/escribir en base de datos, conectarnos en API
// cualqueir cosa que afecte al estado del componente

// si no pasamos 2do arg, se ejecuta siempre
// si definimos un empty array [], se ejecuta solo en el primer render
// si dentro del array tenemos un dependencia el efecto se ejectura cda vez que se actualice la/s dep/s

const useContador = (initial) => {
  const [contador, setContador] = useState(initial);
  const incrementar = () => setContador(contador + 1);
  return [contador, incrementar];
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
    </div>
  );
};

export default App;
