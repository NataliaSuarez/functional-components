import { useReducer, useState } from "react";

/// USE REDUCER

// 1. Definir una estructura de datos que va a contener el state de la app
// para acceder y actualizar los valores del state.
// EJ: Para este caso va a ser { contador: 0 }
// const state = { contador: 0 }

// lo que necesita el useReducer para funcionar es una REDUCER FUNCTION
// const reducer = (acc, el) => { return newAcc };

//// INITIAL STATE
// lo definimos por fuera para no crear el object en cada render
// es el estado inicial de la app
const initialState = { contador: 0 };

/// BASE REDUCER FUNCTION
// para useReducer vamos a utilizar una funcion reducer de este tipo
// state es la estructura
// action = { type: string, payload: any }
// las actions siempre tienen un type y un payload que puede ser Object, Array o cualqueir dato.
const reducer = (state, action) => {
  switch (action.type) {
    case "incrementar":
      return { contador: state.contador + 1 };
    case "decrementar":
      return { contador: state.contador - 1 };
    case "set":
      return { contador: action.payload };
    default:
      return state;
  }
};

const App = () => {
  /// Primer parametro => function reducer
  /// Segundo parametro => initial state
  /// useReducer(reducer, { contador: 0 }); ---> si creamos el objeto en esta linea, se va a crear un object en cada renderizado(!)
  const [state, dispatch] = useReducer(reducer, initialState);
  // RETORNA ARREGLO del STATE como primer parametro
  // y una FUNCTION que nos permite DESPACHAR EVENTOS
  // Eventos: deben tener la forma de `action`
  // it means, (en este caso) deben tener la propiedad de `type` y `payload`

  // local state for use in set
  const [value, setValue] = useState(0);

  return (
    <div>
      <div>Contador: {state.contador}</div>
      <button onClick={() => dispatch({ type: "incrementar" })}>mas</button>
      <button onClick={() => dispatch({ type: "decrementar" })}>menos</button>
      <div>
        <input
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        ></input>
        <button onClick={() => dispatch({ type: "set", payload: value })}>
          set
        </button>
      </div>
    </div>
  );
};

export default App;

export const USE_REDUCER = `import { useReducer, useState } from "react";

/// USE REDUCER

// 1. Definir una estructura de datos que va a contener el state de la app
// para acceder y actualizar los valores del state.
// EJ: Para este caso va a ser { contador: 0 }
// const state = { contador: 0 }

// lo que necesita el useReducer para funcionar es una REDUCER FUNCTION
// const reducer = (acc, el) => { return newAcc };

//// INITIAL STATE
// lo definimos por fuera para no crear el object en cada render
// es el estado inicial de la app
const initialState = { contador: 0 };

/// BASE REDUCER FUNCTION
// para useReducer vamos a utilizar una funcion reducer de este tipo
// state es la estructura
// action = { type: string, payload: any }
// las actions siempre tienen un type y un payload que puede ser Object, Array o cualqueir dato.
const reducer = (state, action) => {
  switch (action.type) {
    case "incrementar":
      return { contador: state.contador + 1 };
    case "decrementar":
      return { contador: state.contador - 1 };
    case "set":
      return { contador: action.payload };
    default:
      return state;
  }
};

const App = () => {
  /// Primer parametro => function reducer
  /// Segundo parametro => initial state
  /// useReducer(reducer, { contador: 0 }); ---> si creamos el objeto en esta linea, 
  // se va a crear un object en cada renderizado(!)
  const [state, dispatch] = useReducer(reducer, initialState);
  // RETORNA ARREGLO del STATE como primer parametro
  // y una FUNCTION que nos permite DESPACHAR EVENTOS
  // Eventos: deben tener la forma de 'action'
  // it means, (en este caso) deben tener la propiedad de 'type' y 'payload'

  // local state for use in set
  const [value, setValue] = useState(0);

  return (
    <div>
      <div>Contador: {state.contador}</div>
      <button onClick={() => dispatch({ type: "incrementar" })}>mas</button>
      <button onClick={() => dispatch({ type: "decrementar" })}>menos</button>
      <div>
        <input
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        ></input>
        <button onClick={() => dispatch({ type: "set", payload: value })}>
          set
        </button>
      </div>
    </div>
  );
};

export default App;
`;
