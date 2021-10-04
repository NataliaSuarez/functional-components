import { useState } from "react";

//// CUSTOM HOOKS
// logica encapsulada para utilizar en cualquier parte de la app
// en este caso en un contador, pero podria ser el llamado a una api
// y al utilizar el hook guardalos la data en el local state

/// USE EFFECT
// cualqueir efecto lateral, como actualizar el DOM, leer/escribir en base de datos, conectarnos en API
// cualqueir cosa que afecte al estado del componente

const useContador = (initial) => {
  const [contador, setContador] = useState(initial);
  const incrementar = () => setContador(contador + 1);
  return [contador, incrementar];
};

const App = () => {
  const [contador, incrementar] = useContador(0);
  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default App;

export const USE_STATE = `import { useState } from "react";

//// CUSTOM HOOKS
// logica encapsulada para utilizar en cualquier parte de la app
// en este caso en un contador, pero podria ser el llamado a una api
// y al utilizar el hook guardalos la data en el local state

/// USE EFFECT
// cualqueir efecto lateral, como actualizar el DOM, leer/escribir en base de datos, conectarnos en API
// cualqueir cosa que afecte al estado del componente

const useContador = (initial) => {
  const [contador, setContador] = useState(initial);
  const incrementar = () => setContador(contador + 1);
  return [contador, incrementar];
};

const App = () => {
  const [contador, incrementar] = useContador(0);
  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default App;
`;
