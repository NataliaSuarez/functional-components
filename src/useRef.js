import { useRef } from "react";

/// USE REF
// Permite obtener referencias del mismo DOM
// es una forma de ACCEDER a los elementos HTML

const App = () => {
  /// USE REF
  // 0. Retorna un objeto con la propiedad current { current: null }
  // 1. Al asignar la constante de referencia a un elemento JSX
  // vamos a poder acceder a ese elemento.
  const ref = useRef();
  const click = () => {
    console.log(ref.current); /// si es un input podemos acceder a focus
    ref.current.innerHTML = "otro texto";
  };

  const inputRef = useRef();
  const focus = () => {
    inputRef.current.focus();
    // console.log(inputRef.current.focus());
  };

  return (
    <div>
      <input ref={inputRef}></input>
      <button onClick={focus}>Focus</button>
      <div onClick={click} ref={ref}>
        click me!
      </div>
    </div>
  );
};

export default App;

//// QUESTIONS

// diferencia entre useRef y createRef

// USE REF es un hook y sigue las REGLAS DE LOS HOOKS
// >>>>>>
// 1. No se pueden llamar en loops, ni condiciones (it means if, while, for, etc) => Siempre en el nivel mas alto del Component
// 2. Solo se llaman en 2 partes:
// - en react Components
// - en custom hooks
// 3. cuando creamos un hook usamos use__
// >>>>>>

// CREATE REF crea una referencia ada vez que llamas a esa función

export const USE_REF = `import { useRef } from "react";

/// USE REF
// Permite obtener referencias del mismo DOM
// es una forma de ACCEDER a los elementos HTML

const App = () => {
  /// USE REF
  // 0. Retorna un objeto con la propiedad current { current: null }
  // 1. Al asignar la constante de referencia a un elemento JSX
  // vamos a poder acceder a ese elemento.
  const ref = useRef();
  const click = () => {
    console.log(ref.current); /// si es un input podemos acceder a focus
    ref.current.innerHTML = "otro texto";
  };

  const inputRef = useRef();
  const focus = () => {
    inputRef.current.focus();
    // console.log(inputRef.current.focus());
  };

  return (
    <div>
      <input ref={inputRef}></input>
      <button onClick={focus}>Focus</button>
      <div onClick={click} ref={ref}>
        click me!
      </div>
    </div>
  );
};

export default App;

//// QUESTIONS

// diferencia entre useRef y createRef

// USE REF es un hook y sigue las REGLAS DE LOS HOOKS
// >>>>>>
// 1. No se pueden llamar en loops, ni condiciones (it means if, while, for, etc)
// => Siempre en el nivel mas alto del Component
// 2. Solo se llaman en 2 partes:
// - en react Components
// - en custom hooks
// 3. cuando creamos un hook usamos use__
// >>>>>>

// CREATE REF crea una referencia ada vez que llamas a esa función
`;
